import { namespace as ns } from '../../config';

const toCSSVariable = (variable) => `--${ns}-${variable.toKebabCase().trim()}`;

export { toCSSVariable as default };
