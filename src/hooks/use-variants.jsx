import { merge } from 'lodash';
import { useCallback } from 'react';

const easeInSine = [0.47, 0, 0.745, 0.715];
const easeOutSine = [0.39, 0.575, 0.565, 1];

const useVariants = () => {
  const variants = {
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easeOutSine,
      },
      y: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: easeInSine,
      },
      y: 84,
    },
    initial: {
      opacity: 0,
      y: 84,
    },
  };

  const toVariant = useCallback((type) => {
    return (props = {}) => {
      return merge(variants[type], props);
    };
  }, []);

  return {
    animate: toVariant('animate'),
    exit: toVariant('exit'),
    initial: toVariant('initial'),
  };
};

export default useVariants;
