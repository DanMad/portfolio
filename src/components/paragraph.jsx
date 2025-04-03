import classNames from 'classnames';
import PropTypes from 'prop-types';
import 'styles/paragraph';

function Paragraph({ children, size }) {
  const paragraphClassNames = classNames('p', size && `p--${size}`);

  return <p className={paragraphClassNames}>{children}</p>;
}

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['squashed']),
};

export default Paragraph;
