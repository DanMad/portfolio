import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import Context from '../components/context';
import Heading from '../components/heading';
import { setTheme } from '../utils';

const About = () => {
  const { data } = useContext(Context);
  const content = data.pages.find((page) => page.name === 'about').content;

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Heading level={1}>about</Heading>
      {parse(content)}
    </>
  );
};

export { About as default };
