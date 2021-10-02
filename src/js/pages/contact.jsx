import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Heading from '../components/heading';
import SEO from '../components/seo';
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
      <SEO title="contact" />
      <main className={toBlock()}>
        <Heading level={1}>contact</Heading>
        {parse(content)}
      </main>
    </>
  );
};

export { Contact as default };
