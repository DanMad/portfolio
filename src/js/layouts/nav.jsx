// import { useContext } from 'react';
import PropTypes from 'prop-types';
// import Context from '../components/context';
import DelayedNavLink from '../components/delayed-nav-link';
import { BEM } from '../utils';
import { namespace as ns } from '../../config';

const { block, element } = BEM('nav');

const Nav = ({ pages }) => {
  // const { setIsTransitioning } = useContext(Context);

  return (
    <nav className={block()}>
      {pages.map((page) => (
        <DelayedNavLink
          activeClassName={`${ns}-active`}
          className={element('link')}
          exact
          key={page}
          // onClick={handleClick}
          to={`/${page.toKebabCase()}`}
          type="nav"
        >
          {page.toTitleCase()}
        </DelayedNavLink>
      ))}
    </nav>
  );
};

Nav.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Nav as default };
