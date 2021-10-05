import { useEffect } from 'react';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { setTheme } from '../utils';

const NotFound = () => {
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <SEO title="404" />
      <Heading level="1">404</Heading>
      <p>The page you're looking for doesn't seem to exist...</p>
    </>
  );
};

export { NotFound as default };
