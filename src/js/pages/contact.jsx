import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { setTheme } from '../utils';

const Contact = () => {
  const { data } = useContext(Context);
  const content = data.pages.find((page) => page.name === 'contact').content;

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <SEO title="contact" />
      <Heading level="1">contact</Heading>
      {parse(content)}
    </>
  );
};

export { Contact as default };
