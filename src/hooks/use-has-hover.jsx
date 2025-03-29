import { useEffect, useState } from 'react';

function useHasHover() {
  const [hasHover, setHasHover] = useState(
    window.matchMedia('(hover: hover)').matches,
  );

  const handleChange = () => {
    setHasHover(mediaQuery.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return hasHover;
}

export default useHasHover;
