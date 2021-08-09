import PropTypes from 'prop-types';
import DelayedNavLink from '../delayed-nav-link';
import { BEM } from '../../utils';
import { namespace as ns } from '../../data';

const { getBlock } = BEM('nav');

const Nav = ({ pages }) => (
  <nav className={getBlock()}>
    {Object.keys(pages).map((pageKey) => (
      <DelayedNavLink
        activeClassName={`${ns}-active`}
        exact={pageKey === 'portfolio'}
        key={pageKey.toKebabCase()}
        to={pageKey !== 'portfolio' ? `/${pageKey}` : '/'}
      >
        {pageKey.toTitleCase()}
      </DelayedNavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  pages: PropTypes.shape({
    about: PropTypes.shape({
      innerHTML: PropTypes.string,
    }),
    contact: PropTypes.shape({
      innerHTML: PropTypes.string,
    }),
    poortfolio: PropTypes.shape({
      innerHTML: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export { Nav as default };
