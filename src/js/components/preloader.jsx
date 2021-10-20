import { useContext } from 'react';
import { BEM } from '../utils';
import Context from './context';

const { toBlock, toElement, toModifier } = BEM('preloader');

const Preloader = () => {
  const { app } = useContext(Context);

  const handleTransitionEnd = () => {
    if (!app.isReady) {
      app.setIsLoading(false);
    }
  };

  const classNames = toBlock() + (app.isReady ? toModifier('ready') : '');

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={toElement('track')}>
        <div className={toElement('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
