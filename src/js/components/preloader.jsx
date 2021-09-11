import { useContext } from 'react';
import Context from './context';
import { BEM } from '../utils';

const { b, e } = BEM('preloader');

const Preloader = () => {
  const { isReady, setIsLoading } = useContext(Context);
  const classNames = b() + (isReady ? ' ready' : '');

  const handleTransitionEnd = () => {
    if (!isReady) setIsLoading(false);
  };

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={e('track')}>
        <div className={e('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
