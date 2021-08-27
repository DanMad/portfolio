import { useContext, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../components/context';

// Source: https://gist.github.com/KimPaow/e900d5b9ac4aa483421c6d19f76bb296

const DelayedNavLink = (props) => {
  const { delay, onDelayStart, onDelayEnd, replace, to, ...rest } = props;
  const { setIsTransitioning } = useContext(Context);
  const history = useHistory();
  const location = useLocation();
  let timer;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const handleClick = (e) => {
    if (location?.pathname === to) {
      return;
    }

    setIsTransitioning(true);

    onDelayStart(e, to);

    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }

      onDelayEnd(e, to);
    }, delay);
  };

  return <NavLink {...rest} to={to} onClick={handleClick} />;
};

DelayedNavLink.propTypes = {
  delay: PropTypes.number,
  onDelayStart: PropTypes.func,
  onDelayEnd: PropTypes.func,
  replace: PropTypes.bool,
  to: PropTypes.string,
};

DelayedNavLink.defaultProps = {
  replace: false,
  delay: 750,
  onDelayStart: () => {},
  onDelayEnd: () => {},
};

export { DelayedNavLink as default };
