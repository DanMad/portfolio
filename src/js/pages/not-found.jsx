import { useEffect } from 'react';
import { setTheme } from '../utils';

const NotFound = () => {
  useEffect(() => {
    setTheme();
  }, []);

  return <h1>Uh-oh! Not found.</h1>;
};

export { NotFound as default };
