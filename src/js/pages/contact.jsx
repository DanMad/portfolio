import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Head from '../components/head';
import Heading from '../components/heading';
import { BEM, setTheme } from '../utils';

const { toBlock } = BEM('main');

const Contact = () => {
  const { data } = useContext(Context);
  const content = data.pages.find((page) => page.name === 'contact').content;

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Head title="contact" />
      <main className={toBlock()}>
        <Heading level={1}>contact</Heading>
        {parse(content)}
      </main>
    </>
  );
};

export { Contact as default };
