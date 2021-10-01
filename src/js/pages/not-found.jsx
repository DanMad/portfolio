import { useEffect } from 'react';
import Head from '../components/head';
import Heading from '../components/heading';
import { BEM, setTheme } from '../utils';

const { toBlock } = BEM('main');

const NotFound = () => {
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Head title="404" />
      <main className={toBlock()}>
        <Heading level={1}>404</Heading>
      </main>
    </>
  );
};

export { NotFound as default };
