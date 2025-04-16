import 'styles/paragraph';

function Paragraph({ children }) {
  return <p className="p">{children}</p>;
}

if (process.env.NODE_ENV !== 'production') {
  Paragraph.displayName = 'Paragraph';
}

export default Paragraph;
