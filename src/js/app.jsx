import 'on-the-case';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './components/context';
import Footer from './components/footer';
import Main from './components/main';
import Nav from './components/nav';
import Preloader from './components/preloader';
import { BEM } from './utils';
import '../scss/styles.scss';

const { toBlock } = BEM('app');

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);

    let timer;

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
  }, []);

  return (
    <Context.Provider
      value={{
        app: { isLoading, isReady, setIsLoading, setIsReady },
        data,
      }}
    >
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Nav />
          <Main />
          <Footer />
        </Router>
      )}
    </Context.Provider>
  );
};

render(<App />, document.querySelector('.' + toBlock()));
