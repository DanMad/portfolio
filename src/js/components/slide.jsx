import 'on-the-case';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { address } from '../../config';
import Context from '../components/context';
import { BEM, setTheme } from '../utils';
import Heading from './heading';

const { toBlock, toElement } = BEM('slide');

const Slide = (props) => {
  const { isReady, setIsReady } = useContext(Context);
  const classNames = toBlock() + (isReady ? ' ready' : '');

  useEffect(() => {
    setIsReady(true);
    setTheme(props.theme);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {props.name.toTitleCase()} | {address.nakedDomain}
        </title>
      </Helmet>
      <div className={classNames}>
        <div className={toElement('inner')}>
          <Heading className={toElement('name')}>{props.name}</Heading>
          <p className={toElement('description')}>{props.description}</p>
        </div>
      </div>
    </>
  );
};

Slide.propTypes = {
  content: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  theme: PropTypes.shape({
    backgroundPrimary: PropTypes.string,
    backgroundSecondary: PropTypes.string,
    focus: PropTypes.string,
    lighting: PropTypes.string,
  }),
};

export { Slide as default };
