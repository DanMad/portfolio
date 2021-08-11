import 'on-the-case';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import Footer from '../layouts/footer';
import Nav from '../layouts/nav';
import Page from '../layouts/page';
import Context from '../components/context';
import '../../scss/styles.scss';

const App = () => {
  const [state, setState] = useState({
    loading: true,
    payload: {},
  });

  const getPayload = () => {
    fetch('/data/api.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((payload) => setState({ loading: false, payload }));
  };

  useEffect(() => {
    getPayload();
  }, []);

  if (state.loading) {
    return <h1>Loading</h1>;
  } else {
    const { pages, projects } = state.payload;

    return (
      <Context.Provider
        value={{
          appState: state,
          setAppState: setState,
        }}
      >
        <BrowserRouter>
          <Nav pages={pages} />
          <Switch>
            <Redirect exact from="/" to="/portfolio" />

            {pages.map((page) => {
              const { innerHTML, title } = page;

              return (
                <Route exact key={title} path={'/' + title.toKebabCase()}>
                  <Page
                    innerHTML={innerHTML}
                    slides={title === 'portfolio' ? projects : []}
                    title={title}
                    type={title === 'portfolio' ? 'slideshow' : 'static'}
                  />
                </Route>
              );
            })}
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </Context.Provider>
    );
  }
};

export { App as default };
