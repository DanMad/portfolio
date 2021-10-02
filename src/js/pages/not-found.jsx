import { useEffect } from 'react';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { BEM, setTheme } from '../utils';

const { toBlock } = BEM('main');

const NotFound = () => {
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <SEO title="404" />
      <main className={toBlock()}>
        <Heading level={1}>404</Heading>
      </main>
    </>
  );
};

export { NotFound as default };
