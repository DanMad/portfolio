import 'on-the-case';
import ns from '../../config/namespace';

const elementSeparator = '__';
const modifierSeparator = '--';

const BEM = (block) => {
  const toBlock = () => ns + '-' + block.toKebabCase().trim();

  const toElement = (element) =>
    toBlock() + elementSeparator + element.toKebabCase().trim();

  const toModifier = (modifier, element) => {
    let blockAndElement;

    if (!element) {
      blockAndElement = toBlock();
    } else if (element.indexOf(toBlock()) === -1) {
      blockAndElement = toElement(element);
    } else {
      blockAndElement = element.toKebabCase().trim();
    }

    return blockAndElement + modifierSeparator + modifier.toKebabCase().trim();
  };

  return {
    toBlock,
    toElement,
    toModifier,
  };
};

export { BEM as default };
