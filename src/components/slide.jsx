import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useWindowSize } from 'react-use';
import Artworks from 'components/artworks';
import Button from 'components/button';
import 'styles/slide';

function Slide({ artworks, description, title, to }) {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const handleClick = () => {
    navigate(to);
  };

  const isSmallWindow = width < 705;

  return (
    <motion.div
      animate="active"
      className="slide"
      exit="inactive"
      initial="inactive"
      variants={{
        active: {
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: [0.39, 0.575, 0.565, 1],
          },
          y: 0,
        },
        inactive: {
          opacity: 0,
          transition: {
            delay: 0.1,
            duration: 0.3,
            ease: [0.47, 0, 0.745, 0.715],
          },
          y: 84,
        },
      }}
    >
      {isSmallWindow ? (
        <>
          <div className="slide__inner">
            <Artworks {...artworks} />
          </div>
          <div className="slide__inner">
            <h2 className="h1">{title}</h2>
            <p className="p">{description}</p>
            <Button onClick={handleClick}>View Project</Button>
          </div>
        </>
      ) : (
        <>
          <div className="slide__inner">
            <h2 className="h1">{title}</h2>
            <p className="p">{description}</p>
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
    type: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Slide;
