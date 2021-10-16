import PropTypes from 'prop-types';
import { BEM } from '../utils';

const { toBlock, toElement, toModifier } = BEM('preloader');

const Preloader = ({ isReady, setIsLoading, setIsReady }) => {
  const handleTransitionEnd = () => {
    if (!isReady) {
      setIsLoading(false);
      setIsReady(true);
    }
  };

  const classNames = toBlock() + (isReady ? ' ' + toModifier('ready') : '');

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={toElement('track')}>
        <div className={toElement('bar')} />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  isReady: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setIsReady: PropTypes.func.isRequired,
};

export { Preloader as default };
