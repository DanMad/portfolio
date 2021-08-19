import 'on-the-case';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../layouts/footer';
import Nav from '../layouts/nav';
// import Page from '../layouts/page';
import Context from '../components/context';
import Preloader from '../components/preloader';
import '../../scss/styles.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRouting, setIsRouting] = useState(false);
  const [data, setdata] = useState();
  const [preloaderClassName, setPreloaderClassName] = useState('');

  useEffect(() => {
    if (isLoading) {
      setPreloaderClassName('mounted');

      let timer;

      fetch('/api/data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          // Mock a response time
          return new Promise((resolve) => {
            timer = setTimeout(() => {
              resolve(response.json());
            }, 5000);
          });
        })
        .then((json) => {
          setdata(json);
          setPreloaderClassName('');
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
        isRouting,
        preloaderClassName,
        setIsLoading,
        setIsRouting,
      }}
    >
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Nav pages={data.pages} />
          {/* <Switch>
              <Redirect exact from="/" to="/portfolio" />
              {data.pages.map((page) => (
                <Route
                  exact
                  key={page.title}
                  path={`/${page.title.toKebabCase()}`}
                >
                  {page.title === 'portfolio' ? (
                    <Page
                      innerHTML={page.innerHTML}
                      slides={data.projects}
                      title={page.title}
                      type={'slideshow'}
                    />
                  ) : (
                    <Page innerHTML={page.innerHTML} title={page.title} />
                  )}
                </Route>
              ))}
            </Switch> */}
          <Footer author={data.author} created={data.created} />
        </BrowserRouter>
      )}
    </Context.Provider>
  );
};

export { App as default };
