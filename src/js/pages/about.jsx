import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Head from '../components/head';
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
      <Head title="about" />
      <main className={toBlock()}>
        <Heading level={1}>about</Heading>
        {parse(content)}
      </main>
    </>
  );
};

export { About as default };
