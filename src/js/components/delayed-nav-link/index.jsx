import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

// Source: https://gist.github.com/KimPaow/e900d5b9ac4aa483421c6d19f76bb296

const DelayedNavLink = (props) => {
  const { delay, onDelayStart, onDelayEnd, replace, to, ...rest } = props;
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

  return <NavLink {...rest} to={to} onClick={handleClick} />;
};

DelayedNavLink.propTypes = {
  // Milliseconds to wait before registering the click.
  delay: PropTypes.number,
  // Called after the link is clicked and before the delay timer starts.
  onDelayStart: PropTypes.func,
  // Called after the delay timer ends.
  onDelayEnd: PropTypes.func,
  // Replace history or not
  replace: PropTypes.bool,
  // Link to go to
  to: PropTypes.string,
};

DelayedNavLink.defaultProps = {
  replace: false,
  delay: 750,
  onDelayStart: () => {},
  onDelayEnd: () => {},
};

export { DelayedNavLink as default };
