import PropTypes from 'prop-types';
import { BEM } from '../utils';

const { toBlock } = BEM('h');

const Heading = ({ children, className, level = 1 }) => {
  const Tag = 'h' + level;
  const classNames = className?.length
    ? `${toBlock() + level} ${className}`
    : toBlock() + level;

  return (
    <Tag
      className={classNames}
      // id={children.toKebabCase()}
    >
      {children.toTitleCase()}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Heading.defaultProps = {
  level: 1,
};

export { Heading as default };
