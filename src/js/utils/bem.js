import { namespace as ns } from '../../config';

const elementSeparator = '__';
const modifierSeparator = '--';

const BEM = (block) => {
  const b = () => ns + '-' + block.trim();

  const e = (element) => b() + elementSeparator + element.trim();

  const m = (modifier, element) => {
    if (!element) {
      return b() + modifierSeparator + modifier.trim();
    }

    return (
      (element.indexOf(b()) === -1 ? e(element) : element.trim()) +
      modifierSeparator +
      modifier.trim()
    );
  };

  return { b, e, m };
};

export { BEM as default };
