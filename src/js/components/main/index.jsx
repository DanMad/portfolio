import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { BEM, useEventListener } from '../../utils';
import toOrientation from './to-orientation';

const { toBlock } = BEM('main');

const Main = ({ children }) => {
  const ref = useRef();
  const [orientation, setOrientation] = useState();

  useEffect(() => {
    const currentOrientation = toOrientation(ref);

    if (currentOrientation !== orientation) {
      setOrientation(currentOrientation);
    }
  }, []);

  useEventListener('resize', () => {
    const currentOrientation = toOrientation(ref);

    if (currentOrientation !== orientation) {
      setOrientation(currentOrientation);
    }
  });

  const classNames = toBlock() + (orientation ? ' ' + orientation : '');

  return (
    <main className={classNames} ref={ref}>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Main as default };
