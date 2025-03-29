import { useEffect } from 'react';
import { useAnimationContext } from 'context/animation';

function useAnimation() {
  const { isAnimating } = useAnimationContext();

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
}

export default useAnimation;
