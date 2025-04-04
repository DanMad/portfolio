import kebabCase from 'lodash/kebabCase';
import 'styles/heading';

function Heading({ children, element, isCopyable = true, level = 1 }) {
  const handleClick = async () => {
    const url = `${window.location.href}#${computedId}`;

    try {
      await navigator.clipboard.writeText(url);
      console.log('Anchor copied to the clipboard!');
    } catch (error) {
      console.error('Failed to copy anchor:', error);
    }
  };

  const computedId = kebabCase(children);
  const computedLevel = Math.min(level, 6);
  const Element = element || `h${computedLevel}`;

  return (
    <Element className={`h${computedLevel}`} id={computedId}>
      {isCopyable ? (
        <span className={`h${computedLevel}__action`} onClick={handleClick}>
          {children}
        </span>
      ) : (
        children
      )}
    </Element>
  );
}

Heading.displayName = 'Heading';

export default Heading;
