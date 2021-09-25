import PropTypes from 'prop-types';
import { BEM } from '../../../utils';
import SVG from '../../svg';
import Dribbble from './dribbble';
import Github from './github';
import Linkedin from './linkedin';

const components = {
  dribbble: Dribbble,
  github: Github,
  linkedin: Linkedin,
};

const { toBlock, toElement } = BEM('social');

const Social = ({ name }) => {
  const Component = components[name];

  return (
    <SVG aria-hidden={true} className={toBlock()} height="48" width="48">
      <Component toElement={toElement} />
    </SVG>
  );
};

Social.propTypes = {
  name: PropTypes.oneOf(['dribbble', 'github', 'linkedin']).isRequired,
};

export { Social as default };
