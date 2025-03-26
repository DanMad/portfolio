import classNames from 'classnames';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import 'styles/heading.scss';

function Heading({ children, element, size, isCopyable = true, level = 1 }) {
  const handleClick = () => {
    const url = `${window.location.href}#${id}`;

    navigator.clipboard.writeText(url).then(() => {
      alert('Anchor copied to your clipboard!');
    });
  };

  const Element = element || `h${level}`;
  const className = classNames(`h${level}`, size && `h${level}--${size}`);
  const id = kebabCase(children);

  return (
    <Element className={className} id={id}>
      {isCopyable ? (
        <span className={`${className}__action`} onClick={handleClick}>
          {children}
        </span>
      ) : (
        children
      )}
    </Element>
  );
}

Heading.propTypes = {
  // string type?
  children: PropTypes.node.isRequired,

  element: PropTypes.oneOf(['h1', 'h2', 'h3']),
  isCopyable: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3]),
  size: PropTypes.oneOf(['squashed']),
};

export default Heading;
