import 'on-the-case';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../layouts/footer';
import Nav from '../layouts/nav';
import Page from '../layouts/page';
import Context from '../components/context';
import '../../scss/styles.scss';

const App = () => {
  const [state, setState] = useState({
    loading: true,
    payload: {},
  });

  useEffect(() => {
    fetch('/api/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((payload) => setState({ loading: false, payload }))
      .catch((error) => console.error(error));
  }, []);

  if (state.loading) {
    return <span>Loading...</span>;
  } else {
    return (
      <Context.Provider
        value={{
          appState: state,
          setAppState: setState,
        }}
      >
        <BrowserRouter>
          <Nav pages={state.payload.pages} />
          <Switch>
            <Redirect exact from="/" to="/portfolio" />
            {state.payload.pages.map((page) => (
              <Route
                exact
                key={page.title}
                path={`/${page.title.toKebabCase()}`}
              >
                {page.title === 'portfolio' ? (
                  <Page
                    innerHTML={page.innerHTML}
                    slides={state.payload.projects}
                    title={page.title}
                    type={'slideshow'}
                  />
                ) : (
                  <Page innerHTML={page.innerHTML} title={page.title} />
                )}
              </Route>
            ))}
          </Switch>
          <Footer
            author={state.payload.author}
            created={state.payload.created}
          />
        </BrowserRouter>
      </Context.Provider>
    );
  }
};

export { App as default };
