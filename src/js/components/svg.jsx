import PropTypes from 'prop-types';

const SVG = ({ children, height, width, ...rest }) => (
  <svg
    {...rest}
    height={height}
    width={width}
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

SVG.propTypes = {
  'aria-hidden': PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export { SVG as default };
