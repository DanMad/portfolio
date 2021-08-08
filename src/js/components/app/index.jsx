import 'on-the-case';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../about';
import Contact from '../contact';
import Footer from '../footer';
import Nav from '../nav';
import Portfolio from '../portfolio';
import '../../../scss/styles.scss';
import { useEffect, useState } from 'react';

const Pages = {
  about: About,
  contact: Contact,
  portfolio: Portfolio,
};

const App = () => {
  const [state, setState] = useState({
    loading: true,
    payload: {},
  });

  const getPayload = () => {
    fetch('~/data/payload.json', {
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
    const { author, created, pages } = state.payload;

    return (
      <Router>
        <>
          <Nav pages={pages} />
          <Switch>
            {Object.keys(pages).map((pageKey) => {
              const isExact = pageKey === 'portfolio';
              const path =
                pageKey !== 'portfolio' ? `/${pageKey.toKebabCase()}` : '/';
              const Page = Pages[pageKey];

              return (
                <Route exact={isExact} key={path} path={path}>
                  <Page />
                </Route>
              );
            })}
          </Switch>
          <Footer author={author} created={created} />
        </>
      </Router>
    );
  }
};

// const App = () => (
//   <Router>
//     <>
//       <Nav />
//       <Switch>
//         {pages.map((page) => {
//           const isExact = page.path === '/';
//           const Page = Pages[page.title];

//           return (
//             <Route
//               exact={isExact}
//               key={page.title.toKebabCase()}
//               path={page.path}
//             >
//               <Page />
//             </Route>
//           );
//         })}
//       </Switch>
//       <Footer />
//     </>
//   </Router>
// );

export { App as default };
