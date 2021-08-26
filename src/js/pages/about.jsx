import { useContext } from 'react';
import parse from 'html-react-parser';
import Context from '../components/context';
import Heading from '../components/heading';

const About = () => {
  const { data } = useContext(Context);
  const content = data.pages.find((page) => page.name === 'about').content;

  return (
    <>
      <Heading level={1}>about</Heading>
      {parse(content)}
    </>
  );
};

export { About as default };
