import 'styles/button';

function Button({
  children,
  ref,
  onBlur = () => {},
  onClick = () => {},
  onFocus = () => {},
  type = 'primary',
}) {
  return (
    <button
      className={`button button--${type}`}
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

Button.displayName = 'Button';

export default Button;
