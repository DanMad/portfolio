import { useEffect, useState } from 'react';

function useColorScheme() {
  const [colorScheme, setColorScheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  const handleChange = (e) => {
    setColorScheme(e.matches ? 'dark' : 'light');
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return colorScheme;
}

export default useColorScheme;
