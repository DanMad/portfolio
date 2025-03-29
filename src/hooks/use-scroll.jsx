import { useCallback, useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollCoords, setScrollCoords] = useState({ x: 0, y: 0 });

  const scroll = useCallback((to, callback = () => {}) => {
    const rootElement = document.querySelector('#root');

    if (rootElement.scrollTop === to) {
      callback();
      return;
    }

    const handleScroll = () => {
      if (rootElement.scrollTop === to) {
        rootElement.removeEventListener('scroll', handleScroll);
        callback();
      }
    };

    rootElement.addEventListener('scroll', handleScroll);
    rootElement.scrollTo({ behavior: 'smooth', top: to });
  }, []);

  useEffect(() => {
    const rootElement = document.querySelector('#root');

    const handleScroll = () => {
      if (rootElement) {
        setScrollCoords({
          x: rootElement.scrollLeft,
          y: rootElement.scrollTop,
        });
      }
    };

    rootElement.addEventListener('scroll', handleScroll);

    return () => {
      rootElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scroll, scrollCoords };
};

export default useScroll;
