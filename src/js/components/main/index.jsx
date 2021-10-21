import { useEffect, useRef, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useEventListener } from '../../hooks';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import NotFound from '../../pages/not-found';
import Portfolio from '../../pages/portfolio';
import { BEM } from '../../utils';
import toOrientation from './to-orientation';

const { toBlock, toModifier } = BEM('main');

const Main = () => {
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

  const classNames = toBlock() + (orientation ? toModifier(orientation) : '');

  return (
    <main className={classNames} ref={ref}>
      <Switch>
        <Redirect exact from="/" to="/portfolio" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Portfolio} path="/portfolio" />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export { Main as default };
