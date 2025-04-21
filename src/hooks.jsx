import { useEffect, useState } from 'react';

const useIsAnimating = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const rootElement = document.querySelector('#root');

    if (isAnimating) {
      rootElement.classList.add('is-animating');
    } else {
      rootElement.classList.remove('is-animating');
    }

    return () => {
      rootElement.classList.remove('is-animating');
    };
  }, [isAnimating]);

  return { isAnimating, setIsAnimating };
};

export { useIsAnimating };
