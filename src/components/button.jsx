import 'styles/button';

function Button({
  children,
  className,
  ref,
  onBlur = () => {},
  onClick = () => {},
  onFocus = () => {},
  type = 'primary',
}) {
  return (
    <button
      className={`button button--${type}${className ? ` ${className}` : ''}`}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
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

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}

export default Button;
