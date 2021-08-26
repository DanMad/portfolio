import parse from 'html-react-parser';
import { useContext } from 'react';
import Context from '../components/context';
import Heading from '../components/heading';

const Contact = () => {
  const { data } = useContext(Context);
  const content = data.pages.find((page) => page.name === 'contact').content;

  return (
    <>
      <Heading level={1}>contact</Heading>
      {parse(content)}
    </>
  );
};

export { Contact as default };
