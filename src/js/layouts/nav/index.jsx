import PropTypes from 'prop-types';
import DelayedNavLink from '../../components/delayed-nav-link';
import { BEM } from '../../utils';

const { getBlock } = BEM('nav');

const Nav = (props) => (
  <nav className={getBlock()}>
    {props.pages.map((page) => {
      const { title } = page;

      return (
        <DelayedNavLink
          activeClassName={'active'}
          exact
          key={title}
          to={'/' + title.toKebabCase()}
        >
          {title.toTitleCase()}
        </DelayedNavLink>
      );
    })}
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
