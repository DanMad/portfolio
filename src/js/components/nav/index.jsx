// import { NavLink } from 'react-router-dom';
import DelayedNavLink from '../delayed-nav-link';
import { BEM } from '../../utils';
import { namespace as ns, pages } from '../../data';

const { getBlock } = BEM('nav');

const Nav = () => (
  <nav className={getBlock()}>
    {pages.map((page) => {
      const isExact = page.path === '/';

      return (
        <DelayedNavLink
          activeClassName={`${ns}-active`}
          exact={isExact}
          key={page.title.toKebabCase()}
          to={page.path}
        >
          {page.title.toTitleCase()}
        </DelayedNavLink>
      );
    })}
  </nav>
);

export { Nav as default };
