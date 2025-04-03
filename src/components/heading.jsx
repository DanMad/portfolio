import classNames from 'classnames';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import 'styles/heading';

function Heading({ children, element, size, isCopyable = true, level = 1 }) {
  const handleClick = (headingId) => {
    const url = `${window.location.href}#${headingId}`;

    navigator.clipboard.writeText(url).then(() => {
      console.log('Anchor copied to the clipboard!');
    });
  };

  const Element = element || `h${level}`;

  const headingClassName = classNames(
    `h${level}`,
    size && `h${level}--${size}`,
  );

  const headingId = kebabCase(children);
  const headingActionClassName = `h${level}__action`;

  return (
    <Element className={headingClassName} id={headingId}>
      {isCopyable ? (
        <span
          className={headingActionClassName}
          onClick={() => handleClick(headingId)}
        >
          {children}
        </span>
      ) : (
        children
      )}
    </Element>
  );
}

Heading.displayName = 'Heading';

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.oneOf(['h1', 'h2', 'h3']),
  isCopyable: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3]),
  size: PropTypes.oneOf(['squashed']),
};

export default Heading;
