import { BEM } from '../../utils';

const bem = BEM('h');
const { getBlock } = bem;

const Heading = ({ children, navigable, style, type = 1 }) => {
  const Tag = `h${type}`;

  return (
    <Tag
      className={`${getBlock()}${type}`}
      id={navigable && children.toKebabCase()}
      style={style}
    >
      {children.toTitleCase()}
    </Tag>
  );
};

export { Heading as default };
