import 'on-the-case';
import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Data from '../components/data';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { setTheme } from '../utils';

const About = () => {
  const { pages } = useContext(Data);
  const page = pages.find((page) => page.title === 'about');

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <SEO description={page.description} title="about" />
      <Heading level="1">about</Heading>
      {parse(page.innerHTML)}
    </>
  );
};

export { About as default };
