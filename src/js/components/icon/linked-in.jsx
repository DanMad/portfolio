import { BEM } from '../../utils';
import SVG from '../svg';

const { b, e, m } = BEM('icon');

const Linkedin = (props) => (
  <SVG
    className={`${b()} ${m('linkedin')}`}
    height={props.size}
    width={props.size}
  >
    <path
      className={e('path')}
      d="M20.45 20.449h-3.557V14.88c0-1.328-.024-3.038-1.85-3.038-1.851 0-2.135 1.447-2.135 2.941v5.666H9.352V8.997h3.414v1.565h.048a3.742 3.742 0 0 1 3.368-1.85c3.604 0 4.269 2.37 4.269 5.455l-.002 6.282zM5.34 7.43a2.064 2.064 0 1 1-.001-4.127 2.064 2.064 0 0 1 0 4.127zM7.118 20.45h-3.56V8.997h3.56v11.452zM22.222.002H1.771A1.751 1.751 0 0 0 0 1.732v20.535A1.753 1.753 0 0 0 1.771 24h20.451A1.756 1.756 0 0 0 24 22.267V1.73A1.755 1.755 0 0 0 22.222 0"
    />
  </SVG>
);

export { Linkedin as default };
