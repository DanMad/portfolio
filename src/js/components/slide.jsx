import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../components/context';
import Heading from './heading';
import { BEM } from '../utils';

const { block, element } = BEM('slide');

const Slide = (props) => {
  const { data, isReady, setIsReady } = useContext(Context);
  const classNames = isReady ? block() + ' mounted' : block();

  useEffect(() => {
    setIsReady(true);
    // setTheme happens on slide mount
  }, []);

  return (
    <div className={classNames}>
      <div className={element('inner')}>
        <Heading className={element('name')}>{props.name}</Heading>
        <p className={element('description')}>{props.description}</p>
      </div>
    </div>
  );
};

Slide.propTypes = {
  colors: PropTypes.shape({
    accent: PropTypes.string,
    lighting: PropTypes.string,
    surface: PropTypes.string,
    surfaceAlt: PropTypes.string,
  }),
  content: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

export { Slide as default };
