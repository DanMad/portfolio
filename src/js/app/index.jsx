import 'on-the-case';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../pages/not-found';
import Portfolio from '../pages/portfolio';
import Footer from '../layouts/footer';
import Nav from '../layouts/nav';
import Context from '../components/context';
import Preloader from '../components/preloader';
import { copyrightDate, name, pages, social } from '../../config';
import '../../scss/styles.scss';

const Pages = {
  about: About,
  contact: Contact,
  portfolio: Portfolio,
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderMounted, setIsPreloaderMounted] = useState(false);
  const [isRouting, setIsRouting] = useState(false);
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
            }, 5000);
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

  return (
    <Context.Provider
      value={{
        data,
        isPreloaderMounted,
        isRouting,
        setIsLoading,
        setIsRouting,
      }}
    >
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Nav pages={pages} />
          <Switch>
            <Redirect exact from="/" to="/portfolio" />
            {pages.map((page) => {
              const Page = Pages[page];

              return (
                <Route
                  component={Page}
                  exact
                  key={page}
                  path={`/${page.toKebabCase()}`}
                />
              );
            })}
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

export { App as default };
