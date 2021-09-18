import 'on-the-case';
import ns from '../../config/namespace';

const toCSSVariable = (variable) => `--${ns}-${variable.toKebabCase().trim()}`;

export { toCSSVariable as default };
