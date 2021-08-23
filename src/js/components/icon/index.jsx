import Dribbble from './dribbble';
import GitHub from './git-hub';
import LinkedIn from './linked-in';
import StackOverflow from './stack-overflow';

const icons = {
  dribbble: Dribbble,
  gitHub: GitHub,
  linkedIn: LinkedIn,
  stackOverflow: StackOverflow,
};

const Icon = ({ style, type, size = 24 }) => {
  const Component = icons[type];
  return <Component size={size} style={style} />;
};

export { Icon as default };
