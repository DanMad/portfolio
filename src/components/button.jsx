import classNames from 'classnames';
import PropTypes from 'prop-types';
import 'styles/button';

function Button({
  className,
  ref,
  children = 'Submit',
  onClick = () => {},
  type = 'primary',
}) {
  const buttonClassNames = classNames('button', `button--${type}`, className);

  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      ref={ref}
      type="button"
    >
      <div aria-hidden="true" className="button__shadow" />
      <div aria-hidden="true" className="button__outline" />
      <div aria-hidden="true" className="button__background" />
      <div aria-hidden="true" className="button__border" />
      <div aria-hidden="true" className="button__embossing" />
      <span className="button__label">{children}</span>
    </button>
  );
}

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Button;
