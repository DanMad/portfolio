import PropTypes from 'prop-types';
import DelayedLink from '../../components/delayed-link';
import { BEM } from '../../utils';

const { getBlock } = BEM('nav');

const Nav = (props) => (
  <nav className={getBlock()}>
    {props.pages.map((page) => (
      <DelayedLink
        activeClassName="active"
        exact
        key={page.title}
        to={`/${page.title.toKebabCase()}`}
        type="nav"
      >
        {page.title.toTitleCase()}
      </DelayedLink>
    ))}
  </nav>
);

Nav.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      innerHTML: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export { Nav as default };
