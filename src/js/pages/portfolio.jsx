import { useContext } from 'react';
import parse from 'html-react-parser';
import Context from '../components/context';

const Portfolio = () => {
  const { data } = useContext(Context);
  const html = data.pages.find((page) => page.name === 'portfolio').html;
  return parse(html);
};

export { Portfolio as default };
