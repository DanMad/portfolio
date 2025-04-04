import 'styles/paragraph';

function Paragraph({ children }) {
  return <p className="p">{children}</p>;
}

Paragraph.displayName = 'Paragraph';

export default Paragraph;
