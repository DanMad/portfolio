import PropTypes from 'prop-types';
import DelayedNavLink from '../components/delayed-nav-link';
import { BEM } from '../utils';
import { namespace as ns } from '../../config';

const { block, element } = BEM('nav');

const Nav = ({ pages }) => (
  <nav className={block()}>
    {pages.map((page) => (
      <DelayedNavLink
        activeClassName={`${ns}-active`}
        className={element('link')}
        exact
        key={page}
        to={`/${page.toKebabCase()}`}
        type="nav"
      >
        {page.toTitleCase()}
      </DelayedNavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Nav as default };
