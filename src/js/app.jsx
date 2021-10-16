import 'on-the-case';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Data from './components/data';
import Footer from './components/footer';
import Main from './components/main';
import Nav from './components/nav';
import Preloader from './components/preloader';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import Portfolio from './pages/portfolio';
import { BEM } from './utils';
import '../scss/styles.scss';

const { toBlock } = BEM('app');

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    let timer;

    setIsReady(true);

    fetch('/api/index.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(
        (response) =>
          // Mock response time.
          new Promise((resolve) => {
            timer = setTimeout(() => {
              resolve(response.json());
            }, 3000);
          }),
      )
      .then((json) => {
        setData(json);
        setIsReady(false);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <Data.Provider value={{ ...data }}>
      {isLoading ? (
        <Preloader
          isReady={isReady}
          setIsLoading={setIsLoading}
          setIsReady={setIsReady}
        />
      ) : (
        <Router>
          <Nav />
          <Main>
            <Switch>
              <Redirect exact from="/" to="/portfolio" />
              <Route component={About} path="/about" />
              <Route component={Contact} path="/contact" />
              <Route component={Portfolio} path="/portfolio" />
              <Route component={NotFound} />
            </Switch>
          </Main>
          <Footer />
        </Router>
      )}
    </Data.Provider>
  );
};

render(<App />, document.querySelector('.' + toBlock()));
