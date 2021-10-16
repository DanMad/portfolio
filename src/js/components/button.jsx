import 'on-the-case';
import PropTypes from 'prop-types';
import { BEM } from '../utils';

const { toBlock } = BEM('button');

const Button = ({ children, className }) => {
  const classNames = toBlock() + (className ? ' ' + className : '');

  return <button className={classNames}>{children.toTitleCase()}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { Button as default };
