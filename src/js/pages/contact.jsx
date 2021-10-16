import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Data from '../components/data';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { setTheme } from '../utils';

const Contact = () => {
  const { pages } = useContext(Data);
  const page = pages.find((page) => page.title === 'contact');

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <SEO description={page.description} title="contact" />
      <Heading level="1">contact</Heading>
      {parse(page.innerHTML)}
    </>
  );
};

export { Contact as default };
