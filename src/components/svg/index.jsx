// import { BEM } from '../../utils';
import './styles.scss';

// const bem = BEM('svg');
// const { getBlock } = bem;

const SVG = (props) => (
  <svg
    className={props.className}
    height={props.height}
    width={props.width}
    style={props.style}
    viewBox={`0 0 ${props.width} ${props.height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {props.children}
  </svg>
);

export { SVG as default };
