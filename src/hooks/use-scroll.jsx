import { useCallback } from 'react';

const useScroll = () => {
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

  return scroll;
};

export default useScroll;
