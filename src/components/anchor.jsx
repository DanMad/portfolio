import 'styles/anchor';

function Anchor({ children, href, target }) {
  return (
    <a
      className="a"
      href={href}
      rel={target === '_blank' && 'noopener noreferrer'}
      target={target}
    >
      {children}
    </a>
  );
}

Anchor.displayName = 'Anchor';

export default Anchor;
