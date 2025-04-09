import { motion } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useWindowSize } from 'react-use';
import Composition from 'components/composition';
import Button from 'components/button';
import Heading from 'components/heading';
import Paragraph from 'components/paragraph';
import Context from 'context';
import toVariant from 'helpers/to-variant';
import 'styles/slide';

function Slide({
  composition,
  description,
  direction,
  title,
  to,
  onAnimationComplete = () => {},
  onAnimationStart = () => {},
}) {
  const { isSlideButtonFocused, setIsSlideButtonFocused } = useContext(Context);
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const { width } = useWindowSize();

  const isSmallWindow = width < 705;

  useEffect(() => {
    if (isSmallWindow) {
      return;
    }

    if (isSlideButtonFocused) {
      buttonRef.current.focus();
    }
  }, [isSlideButtonFocused]);

  const handleBlur = () => {
    if (isSmallWindow) {
      return;
    }

    setIsSlideButtonFocused(false);
  };

  const handleClick = () => {
    navigate(to);
  };

  const handleFocus = () => {
    if (isSmallWindow) {
      return;
    }

    setIsSlideButtonFocused(true);
  };

  const variants = {
    animate: toVariant('animate'),
    exit: toVariant(
      'exit',
      direction
        ? { transition: { delay: 0 }, y: direction === 'down' ? -84 : 84 }
        : { transition: { delay: 0.1 }, y: 84 },
    ),
    initial: toVariant(
      'initial',
      direction ? { y: direction === 'down' ? 84 : -84 } : {},
    ),
  };

  return (
    <motion.div
      animate="animate"
      className="slide"
      exit="exit"
      initial="initial"
      onAnimationComplete={onAnimationComplete}
      onAnimationStart={onAnimationStart}
      variants={variants}
    >
      {isSmallWindow ? (
        <>
          <div className="slide__inner">
            <Composition {...composition} />
          </div>
          <div className="slide__inner">
            <Heading element="h2" isCopyable={false} level={1}>
              {title}
            </Heading>
            <Paragraph>{description}</Paragraph>
            <Button
              onBlur={handleBlur}
              onClick={handleClick}
              onFocus={handleFocus}
              ref={buttonRef}
            >
              View Project
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="slide__inner">
            <Heading element="h2" isCopyable={false} level={1}>
              {title}
            </Heading>
            <Paragraph>{description}</Paragraph>
            <Button
              onBlur={handleBlur}
              onClick={handleClick}
              onFocus={handleFocus}
              ref={buttonRef}
            >
              View Project
            </Button>
          </div>
          <div className="slide__inner">
            <Composition {...composition} />
          </div>
        </>
      )}
    </motion.div>
  );
}

Slide.displayName = 'Slide';

export default Slide;
