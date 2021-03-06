import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { duration } from '../../config';
import Context from '../components/context';

const DelayedNavLink = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { setIsReady } = useContext(Context);
  const { onClick, to, ...misc } = props;

  let timer;

  const handleClick = (e) => {
    if (location.pathname === to) return;

    e.preventDefault();
    setIsReady(false);

    timer = setTimeout(() => {
      history.push(to);
    }, duration.pageTransitionOut);

    onClick();
  };

  useEffect(
    () => () => {
      clearTimeout(timer);
    },
    [timer],
  );

  return <NavLink onClick={handleClick} to={to} {...misc} />;
};

DelayedNavLink.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

DelayedNavLink.defaultProps = {
  onClick: () => {},
};

export { DelayedNavLink as default };
