import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Heading from '../components/heading';
import Payload from '../components/payload';
import SEO from '../components/seo';
import { setTheme } from '../utils';

const Contact = () => {
  const { pages } = useContext(Payload);
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
