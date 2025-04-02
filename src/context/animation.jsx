import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AnimationContext = createContext({
  hasAnimated: false,
  isAnimating: false,
  setHasAnimated: () => {},
  setIsAnimating: () => {},
});

const AnimationProvider = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const value = {
    hasAnimated,
    isAnimating,
    setHasAnimated,
    setIsAnimating,
  };

  return <AnimationContext value={value}>{children}</AnimationContext>;
};

AnimationProvider.displayName = 'AnimationProvider';

AnimationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAnimationContext = () => {
  return useContext(AnimationContext);
};

export default AnimationProvider;
export { useAnimationContext };
