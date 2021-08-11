import PropTypes from 'prop-types';
import { BEM } from '../../utils';

const { getBlock } = BEM('h');

const Heading = (props) => {
  const Tag = 'h' + props.level;

  return (
    <Tag className={getBlock() + props.level} id={props.children.toKebabCase()}>
      {props.children.toTitleCase()}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Heading.defaultProps = {
  level: 1,
};

export { Heading as default };
