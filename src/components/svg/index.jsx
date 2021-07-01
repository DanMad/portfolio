import './styles.scss';

const SVG = (props) => (
  <svg
    className={props.className}
    height={props.height}
    width={props.width}
    viewBox={`0 0 ${props.width} ${props.height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {props.children}
  </svg>
);

export { SVG as default }
