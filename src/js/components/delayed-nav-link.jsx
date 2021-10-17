import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { duration } from '../../config';

const DelayedNavLink = ({ onClick, to, ...rest }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  let timer;

  const handleClick = (e) => {
    if (pathname === to) {
      return;
    }

    e.preventDefault();

    timer = setTimeout(() => {
      history.push(to);
    }, duration.unit * 12);

    onClick();
  };

  useEffect(
    () => () => {
      clearTimeout(timer);
    },
    [timer],
  );

  return <NavLink {...rest} onClick={handleClick} to={to} />;
};

DelayedNavLink.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

DelayedNavLink.defaultProps = {
  onClick: () => {},
};

export { DelayedNavLink as default };
