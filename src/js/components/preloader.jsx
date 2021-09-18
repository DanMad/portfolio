import { useContext } from 'react';
import Context from './context';
import { BEM } from '../utils';

const { toBlock, toElement } = BEM('preloader');

const Preloader = () => {
  const { isReady, setIsLoading } = useContext(Context);
  const classNames = toBlock() + (isReady ? ' ready' : '');

  const handleTransitionEnd = () => {
    if (!isReady) setIsLoading(false);
  };

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={toElement('track')}>
        <div className={toElement('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
