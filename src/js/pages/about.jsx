import { useContext } from 'react';
import parse from 'html-react-parser';
import Context from '../components/context';

const About = () => {
  const { data } = useContext(Context);
  const html = data.pages.find((page) => page.name === 'about').html;
  return parse(html);
};

export { About as default };
