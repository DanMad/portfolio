import { AnimatePresence } from 'framer-motion';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSessionStorage, useWindowSize } from 'react-use';
import Slide from 'components/slide';
import { useAnimationContext } from 'context/animation';
import 'styles/slider';

function Slider({ slides }) {
  const { setIsAnimating } = useAnimationContext();
  const [lastIndex, setLastIndex] = useSessionStorage('lastIndex', 0);
  const [index, setIndex] = useState(lastIndex);
  const [direction, setDirection] = useState(null);
  const { width } = useWindowSize();

  const handleAnimationComplete = (variant) => {
    if (variant === 'animate') {
      setDirection(null);
      setIsAnimating(false);
    }
  };

  const handleAnimationStart = (variant) => {
    if (variant === 'exit') {
      setIsAnimating(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setDirection('down');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setDirection('up');
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setDirection('down');
    } else if (e.deltaY < 0) {
      setDirection('up');
    }
  };

  const debouncedHandleKeyDown = debounce(handleKeyDown, 300, {
    leading: true,
    trailing: false,
  });

  const debouncedHandleWheel = debounce(handleWheel, 40, {
    leading: true,
    trailing: false,
  });

  const isSmallWindow = width < 705;

  useEffect(() => {
    if (direction === 'down') {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (direction === 'up') {
      setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  }, [direction]);

  useEffect(() => {
    if (isSmallWindow) {
      return;
    }

    window.addEventListener('keydown', debouncedHandleKeyDown);
    window.addEventListener('wheel', debouncedHandleWheel);

    return () => {
      window.removeEventListener('keydown', debouncedHandleKeyDown);
      window.removeEventListener('wheel', debouncedHandleWheel);
    };
  }, [isSmallWindow]);

  useEffect(() => {
    setLastIndex(index);
  }, [index]);

  return (
    <div className="slider">
      <AnimatePresence mode="wait" propagate>
        {isSmallWindow ? (
          slides.map((slide) => <Slide key={slide.id} {...slide} />)
        ) : (
          <Slide
            direction={direction}
            key={slides[index].id}
            onAnimationComplete={handleAnimationComplete}
            onAnimationStart={handleAnimationStart}
            {...slides[index]}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  slides: PropTypes.arrayOf(Slide.propTypes).isRequired,
};

export default Slider;
