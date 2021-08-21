import PropTypes from 'prop-types';
import DelayedLink from '../../components/delayed-link';
import { BEM } from '../../utils';
import { namespace as ns } from '../../../config';

const { block, element } = BEM('nav');

const Nav = ({ pages }) => (
  <nav className={block()}>
    {pages.map((page) => (
      <DelayedLink
        activeClassName={`${ns}-active`}
        className={element('link')}
        exact
        key={page}
        to={`/${page.toKebabCase()}`}
        type="nav"
      >
        {page.toTitleCase()}
      </DelayedLink>
    ))}
  </nav>
);

Nav.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Nav as default };
