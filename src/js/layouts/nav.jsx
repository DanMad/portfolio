import DelayedNavLink from '../components/delayed-nav-link';
import { BEM } from '../utils';
import { pages } from '../../config';

const { block, element } = BEM('nav');

const Nav = () => {
  const handleClick = (page) => {
    console.log(page);
  };

  return (
    <nav className={block()}>
      {pages.map((page) => (
        <DelayedNavLink
          activeClassName="active"
          className={element('link')}
          exact
          key={page}
          onClick={() => handleClick(page)}
          to={'/' + page.toKebabCase()}
        >
          {page.toTitleCase()}
        </DelayedNavLink>
      ))}
      <div className={element('underline')} />
    </nav>
  );
};

export { Nav as default };
