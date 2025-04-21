import { AnimatePresence } from 'framer-motion';
import { Lethargy } from 'lethargy';
import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';
import { useSessionStorage, useWindowSize } from 'react-use';
import Slide from 'components/slide';
import { useIsAnimating } from 'hooks';
import 'styles/slider';

const lethargy = new Lethargy();

function Slider({ slides }) {
  const { setIsAnimating } = useIsAnimating();
  const [storedIndex, setStoredIndex] = useSessionStorage('index', 0);
  const [direction, setDirection] = useState(null);
  const [index, setIndex] = useState(storedIndex);
  const { width } = useWindowSize();

  useEffect(() => {
    if (direction === 'down') {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (direction === 'up') {
      setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  }, [direction, slides]);

  useEffect(() => {
    setStoredIndex(index);
  }, [index]);

  const isSmallWindow = width < 705;

  useEffect(() => {
    if (isSmallWindow) {
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setDirection('down');
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setDirection('up');
      }
    };

    const handleWheel = (e) => {
      const scrollIntent = lethargy.check(e);

      if (scrollIntent === -1) {
        setDirection('down');
      } else if (scrollIntent === 1) {
        setDirection('up');
      }
    };

    const debouncedHandleKeyDown = debounce(handleKeyDown, 300, {
      leading: true,
      trailing: false,
    });

    window.addEventListener('keydown', debouncedHandleKeyDown);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('keydown', debouncedHandleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isSmallWindow]);

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

if (process.env.NODE_ENV !== 'production') {
  Slider.displayName = 'Slider';
}

export default Slider;
