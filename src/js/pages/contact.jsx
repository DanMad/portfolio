import parse from 'html-react-parser';
import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { address } from '../../config';
import Context from '../components/context';
import Heading from '../components/heading';
import { setTheme } from '../utils';

const Contact = () => {
  const { data } = useContext(Context);
  const content = data.pages.find((page) => page.name === 'contact').content;

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Contact | {address.secondLevelDomain + address.topLevelDomain}
        </title>
      </Helmet>
      <Heading level={1}>contact</Heading>
      {parse(content)}
    </>
  );
};

export { Contact as default };
