import { namespace as ns } from '../data';

const BEM = (block) => {
  const getBlock = () => `${ns}-${block.trim()}`;

  const getElement = (element) => `${getBlock()}__${element.trim()}`;

  const getModifier = (modifier, element) => {
    if (!element) {
      return `${getBlock()}--${modifier.trim()}`;
    }

    return `${
      element.indexOf(getBlock()) === -1 ? getElement(element) : element.trim()
    }--${modifier.trim()}`;
  };

  return {
    getBlock,
    getElement,
    getModifier,
  };
};

export { BEM as default };
