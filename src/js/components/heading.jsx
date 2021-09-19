import PropTypes from 'prop-types';
import { BEM } from '../utils';

const { toBlock } = BEM('h');

const Heading = ({ children, className, level }) => {
  const Tag = 'h' + level;
  const classNames =
    toBlock() + level + (className?.length ? ` ${className}` : '');

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
  level: 2,
};

export { Heading as default };
