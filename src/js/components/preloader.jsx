import { useContext } from 'react';
import { BEM } from '../utils';
import Context from './context';

const { toBlock, toElement } = BEM('preloader');

const Preloader = () => {
  const { isReady, setIsLoading } = useContext(Context);

  const handleTransitionEnd = () => {
    if (!isReady) {
      setIsLoading(false);
    }
  };

  const classNames = toBlock() + (isReady ? ' ready' : '');

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={toElement('track')}>
        <div className={toElement('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
