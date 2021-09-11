import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../components/context';
import Heading from './heading';
import { BEM, setTheme } from '../utils';

const { b, e } = BEM('slide');

const Slide = (props) => {
  const { isReady, setIsReady } = useContext(Context);
  const classNames = isReady ? b() + ' mounted' : b();

  useEffect(() => {
    setIsReady(true);
    setTheme(props.theme);
  }, []);

  return (
    <div className={classNames}>
      <div className={e('inner')}>
        <Heading className={e('name')}>{props.name}</Heading>
        <p className={e('description')}>{props.description}</p>
      </div>
    </div>
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
