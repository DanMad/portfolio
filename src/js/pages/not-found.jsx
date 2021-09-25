import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { address } from '../../config';
import Heading from '../components/heading';
import { BEM, setTheme } from '../utils';

const { toBlock } = BEM('main');

const NotFound = () => {
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          404 | {address.secondLevelDomain + address.topLevelDomain}
        </title>
      </Helmet>
      <main className={toBlock()}>
        <Heading level={1}>404</Heading>
      </main>
    </>
  );
};

export { NotFound as default };
