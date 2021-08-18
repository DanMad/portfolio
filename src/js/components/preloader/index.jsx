import { BEM } from '../../utils';

const { getBlock, getElement } = BEM('preloader');

const Preloader = () => {
  return (
    <div className={getBlock()}>
      <div className={getElement('track')}>
        <div className={getElement('bar')} />
      </div>
    </div>
  );
};

export { Preloader as default };
