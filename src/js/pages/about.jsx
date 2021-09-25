import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { address } from '../../config';
import Context from '../components/context';
import Heading from '../components/heading';
import { BEM, setTheme } from '../utils';

const { toBlock } = BEM('main');

const About = () => {
  const { data } = useContext(Context);
  const { pages } = data;
  const content = pages.find((page) => page.name === 'about').content;

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          About | {address.secondLevelDomain + address.topLevelDomain}
        </title>
      </Helmet>
      <main className={toBlock()}>
        <Heading level={1}>about</Heading>
        {parse(content)}
      </main>
    </>
  );
};

export { About as default };
