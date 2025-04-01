import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useWindowSize } from 'react-use';
import Artworks from 'components/artworks';
import Button from 'components/button';
import Heading from 'components/heading';
import Paragraph from 'components/paragraph';
import useScroll from 'hooks/use-scroll';
import useVariants from 'hooks/use-variants';
import 'styles/slide';

function Slide({
  artworks,
  description,
  direction,
  title,
  to,
  onAnimationComplete = () => {},
  onAnimationStart = () => {},
}) {
  const navigate = useNavigate();
  const scroll = useScroll();
  const { animate, exit, initial } = useVariants();
  const { width } = useWindowSize();

  const isSmallWindow = width < 705;

  const handleClick = () => {
    if (isSmallWindow) {
      scroll(0, () => {
        navigate(to);
      });

      return;
    }

    navigate(to);
  };

  return (
    <motion.div
      animate="animate"
      className="slide"
      exit="exit"
      initial="initial"
      onAnimationComplete={onAnimationComplete}
      onAnimationStart={onAnimationStart}
      variants={{
        animate: animate(),
        exit: exit(
          direction
            ? { transition: { delay: 0 }, y: direction === 'down' ? -84 : 84 }
            : { transition: { delay: 0.1 }, y: 84 },
        ),
        initial: initial(
          direction ? { y: direction === 'down' ? 84 : -84 } : {},
        ),
      }}
    >
      {isSmallWindow ? (
        <>
          <div className="slide__inner">
            <Artworks {...artworks} />
          </div>
          <div className="slide__inner">
            <Heading element="h2" isCopyable={false} level={1}>
              {title}
            </Heading>
            <Paragraph>{description}</Paragraph>
            <Button onClick={handleClick}>View Project</Button>
          </div>
        </>
      ) : (
        <>
          <div className="slide__inner">
            <Heading element="h2" isCopyable={false} level={1}>
              {title}
            </Heading>
            <Paragraph>{description}</Paragraph>
            <Button onClick={handleClick}>View Project</Button>
          </div>
          <div className="slide__inner">
            <Artworks {...artworks} />
          </div>
        </>
      )}
    </motion.div>
  );
}

Slide.displayName = 'Slide';

Slide.propTypes = {
  artworks: PropTypes.shape({
    hasDarkMode: PropTypes.bool,
    type: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf([null, 'down', 'up']),
  onAnimationComplete: PropTypes.func,
  onAnimationStart: PropTypes.func,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Slide;
