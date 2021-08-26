import PropTypes from 'prop-types';
import Heading from './heading';
import { BEM } from '../utils';

const Slide = (props) => {
  const { block, element } = BEM('slider');

  return (
    <div className={block()}>
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
