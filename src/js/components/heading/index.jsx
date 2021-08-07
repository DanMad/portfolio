import { BEM } from '../../utils';

const { getBlock } = BEM('h');

const Heading = ({ children, navigable, style, level = 1 }) => {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`${getBlock()}${level}`}
      id={navigable && children.toKebabCase()}
      style={style}
    >
      {children.toTitleCase()}
    </Tag>
  );
};

export { Heading as default };
