import Dribbble from './dribbble';
import Github from './github';
import Linkedin from './linkedin';
import StackOverflow from './stack-overflow';
import './styles.scss';

const icons = {
  dribbble: Dribbble,
  github: Github,
  linkedin: Linkedin,
  stackOverflow: StackOverflow,
};

const Icon = ({ type, size = 24 }) => {
  const Component = icons[type];
  return <Component size={size} />
};

export { Icon as default };
