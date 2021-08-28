import { useContext } from 'react';
import Context from './context';
import { BEM } from '../utils';

const { block, element } = BEM('preloader');

const Preloader = () => {
  const { isReady, setIsLoading } = useContext(Context);
  const classNames = block() + (isReady ? ' ready' : '');

  const handleTransitionEnd = () => {
    if (!isReady) setIsLoading(false);
  };

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={element('track')}>
        <div className={element('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
