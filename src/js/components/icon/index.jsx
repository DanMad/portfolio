import Dribbble from './dribbble';
import Github from './github';
import Linkedin from './linkedin';
import StackOverflow from './stack-overflow';

const icons = {
  dribbble: Dribbble,
  github: Github,
  linkedin: Linkedin,
  stackOverflow: StackOverflow,
};

const Icon = ({ style, type, size = 24 }) => {
  const Component = icons[type];
  return <Component size={size} style={style} />;
};

export { Icon as default };
