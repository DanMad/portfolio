import { useEffect } from 'react';
import { useAnimationContext } from 'context/animation';

function useAnimation() {
  const { isAnimating } = useAnimationContext();

  useEffect(() => {
    const html = document.documentElement;

    if (isAnimating) {
      html.classList.add('is-animating');
    } else {
      html.classList.remove('is-animating');
    }

    return () => {
      html.classList.remove('is-animating');
    };
  }, [isAnimating]);
}

export default useAnimation;
