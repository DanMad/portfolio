import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { setTheme } from '../utils';

const About = () => {
  const { app, data } = useContext(Context);
  const page = data.pages.find((page) => page.title === 'about');

  useEffect(() => {
    app.setIsReady(true);
    setTheme();
  }, []);

  // const classNames = toBlock() + (app.isReady ? toModifier('ready') : '');

  return (
    <>
      <SEO description={page.description} title="about" />
      <Heading level="1">about</Heading>
      {parse(page.innerHTML)}
    </>
  );
};

export { About as default };
