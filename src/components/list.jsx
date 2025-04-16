import 'styles/list';

function List({ children, isOrdered = false }) {
  const className = isOrdered ? 'ol' : 'ul';
  const Element = isOrdered ? 'ol' : 'ul';

  return <Element className={className}>{children}</Element>;
}

function ListItem({ children }) {
  return <li className="li">{children}</li>;
}

if (process.env.NODE_ENV !== 'production') {
  List.displayName = 'List';
  ListItem.displayName = 'ListItem';
}

export default List;
export { ListItem };
