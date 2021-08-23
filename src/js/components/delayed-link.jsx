import { useEffect } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Source: https://gist.github.com/KimPaow/e900d5b9ac4aa483421c6d19f76bb296

const DelayedLink = (props) => {
  const { delay, onDelayStart, onDelayEnd, replace, to, type, ...rest } = props;
  const Component = type === 'default' ? Link : NavLink;
  const history = useHistory();
  const location = useLocation();
  let timeout = null;

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = (e) => {
    if (location?.pathname === to) {
      return;
    }

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

  return <Component {...rest} to={to} onClick={handleClick} />;
};

DelayedLink.propTypes = {
  delay: PropTypes.number,
  onDelayStart: PropTypes.func,
  onDelayEnd: PropTypes.func,
  replace: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['default', 'nav']),
};

DelayedLink.defaultProps = {
  replace: false,
  delay: 750,
  onDelayStart: () => {},
  onDelayEnd: () => {},
  type: 'default',
};

export { DelayedLink as default };
