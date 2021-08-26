import 'on-the-case';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import Portfolio from './pages/portfolio';
import Footer from './layouts/footer';
import Nav from './layouts/nav';
import Context from './components/context';
import Preloader from './components/preloader';
import { copyrightDate, name, namespace as ns, pages, social } from '../config';
import '../scss/styles.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [isPageMounted, setIsPageMounted] = useState(false);
  // const [isPageRouting, setIsPageRouting] = useState(false);
  const [isPreloaderMounted, setIsPreloaderMounted] = useState(false);
  const [data, setdata] = useState();

  useEffect(() => {
    if (isLoading) {
      setIsPreloaderMounted(true);

      let timer;

      fetch('/api/index.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          // Mocked response time.
          return new Promise((resolve) => {
            timer = setTimeout(() => {
              resolve(response.json());
            }, 3000);
          });
        })
        .then((json) => {
          setdata(json);
          setIsPreloaderMounted(false);
        })
        .catch((error) => console.error(error));

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  // const [ projects ] = data.projects;

  return (
    <Context.Provider
      value={{
        data,
        // isPageMounted,
        isPreloaderMounted,
        // isRouting,
        setIsLoading,
        // setIsPageMounted,
        // setIsRouting,
      }}
    >
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Nav pages={pages} />
          <Switch>
            <Redirect exact from="/" to="/portfolio" />
            <Route component={About} path="/about" />
            <Route component={Contact} path="/contact" />
            <Route component={Portfolio} path="/portfolio" />
            <Route component={NotFound} />
          </Switch>
          <Footer
            copyrightDate={copyrightDate}
            name={name.full}
            social={social}
          />
        </Router>
      )}
    </Context.Provider>
  );
};

render(<App />, document.querySelector(`.${ns}-app`));
