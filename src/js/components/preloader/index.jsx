import { useContext } from 'react';
import Context from '../context';
import { BEM } from '../../utils';

const { getBlock, getElement } = BEM('preloader');

const Preloader = () => {
  const { preloaderClassName, setIsLoading } = useContext(Context);

  const handleTransitionEnd = () => {
    if (preloaderClassName === '') {
      setIsLoading(false);
    }
  };

  const classNames =
    preloaderClassName === ''
      ? getBlock()
      : `${getBlock()} ${preloaderClassName}`;

  return (
    <div className={classNames} onTransitionEnd={handleTransitionEnd}>
      <div className={getElement('track')}>
        <div className={getElement('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
