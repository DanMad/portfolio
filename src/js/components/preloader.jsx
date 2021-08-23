import { useContext } from 'react';
import Context from './context';
import { BEM } from '../utils';

const { block, element } = BEM('preloader');

const Preloader = () => {
  const { isPreloaderMounted, setIsLoading } = useContext(Context);

  const handleTransitionEnd = () => {
    if (!isPreloaderMounted) {
      setIsLoading(false);
    }
  };

  const classNames = isPreloaderMounted ? block() + ' mounted' : block();

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={element('track')}>
        <div className={element('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
