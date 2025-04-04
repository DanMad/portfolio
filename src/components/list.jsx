import 'styles/list';

function ListItem({ children }) {
  return <li className="li">{children}</li>;
}

ListItem.displayName = 'ListItem';

function List({ children, isOrdered = false }) {
  const className = isOrdered ? 'ol' : 'ul';
  const Element = isOrdered ? 'ol' : 'ul';

  return <Element className={className}>{children}</Element>;
}

List.displayName = 'List';

export default List;
export { ListItem };
