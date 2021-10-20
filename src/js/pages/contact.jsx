import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { setTheme } from '../utils';

const Contact = () => {
  const { app, data } = useContext(Context);
  const page = data.pages.find((page) => page.title === 'contact');

  useEffect(() => {
    app.setIsReady(true);
    setTheme();
  }, []);

  // const classNames = toBlock() + (app.isReady ? toModifier('ready') : '');

  return (
    <>
      <SEO description={page.description} title="contact" />
      <Heading level="1">contact</Heading>
      {parse(page.innerHTML)}
    </>
  );
};

export { Contact as default };
