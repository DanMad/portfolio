import { useContext } from 'react';
import parse from 'html-react-parser';
import Context from '../components/context';

const Contact = () => {
  const { data } = useContext(Context);
  const html = data.pages.find((page) => page.name === 'contact').html;
  return parse(html);
};

export { Contact as default };
