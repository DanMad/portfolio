import PropTypes from 'prop-types';
import { BEM } from '../utils';
import SVG from './svg';
import Dribbble from './dribbble';
import Github from './github';
import Linkedin from './linkedin';

const components = {
  dribbble: Dribbble,
  github: Github,
  linkedin: Linkedin,
};

const { toBlock, toElement } = BEM('social-platform');

const SocialPlatform = ({ type }) => {
  const Component = components[type];

  return (
    <SVG aria-hidden={true} className={toBlock()} height="44" width="44">
      <Component toElement={toElement} />
    </SVG>
  );
};

SocialPlatform.propTypes = {
  type: PropTypes.oneOf(['dribbble', 'github', 'linkedin']).isRequired,
};

export { SocialPlatform as default };
