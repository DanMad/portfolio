import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../pages/not-found';
import Portfolio from '../pages/portfolio';
import { BEM } from '../utils';
import Context from './context';

const { toBlock } = BEM('main');

const Main = () => {
  const { app } = useContext(Context);
  const classNames = toBlock() + (app.isReady ? ' ready' : '');

  return (
    <main className={classNames}>
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
