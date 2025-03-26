import { AnimatePresence, motion } from 'framer-motion';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSessionStorage, useWindowSize } from 'react-use';
import Slide from 'components/slide';
import 'styles/slider';

function Slider({ slides }) {
  const [lastIndex, setLastIndex] = useSessionStorage('lastIndex', 0);
  const [index, setIndex] = useState(lastIndex);
  const { width } = useWindowSize();

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((prev) => (prev + 1) % slides.length);
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      console.log('up');
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (e.deltaY > 0) {
      console.log('down');
      setIndex((prev) => (prev + 1) % slides.length);
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
      <>
        {isSmallWindow ? (
          slides.map((slide) => <Slide key={slide.id} {...slide} />)
        ) : (
          <AnimatePresence mode="wait" propagate>
            <Slide key={slides[index].id} {...slides[index]} />
          </AnimatePresence>
        )}
      </>
    </div>
  );
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Slider;
