import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { address } from '../../config';
import Heading from '../components/heading';
import { setTheme } from '../utils';

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
      <Heading level={1}>404</Heading>
    </>
  );
};

export { NotFound as default };
