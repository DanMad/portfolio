import 'on-the-case';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../about';
import Contact from '../contact';
import Footer from '../footer';
import Nav from '../nav';
import Portfolio from '../portfolio';
import { pages } from '../../data';
import '../../../scss/styles.scss';

const Pages = {
  about: About,
  contact: Contact,
  portfolio: Portfolio,
};

const App = () => (
  <Router>
    <>
      <Nav />
      <Switch>
        {pages.map((page) => {
          const isExact = page.path === '/';
          const Page = Pages[page.title];

          return (
            <Route
              exact={isExact}
              key={page.title.toKebabCase()}
              path={page.path}
            >
              <Page />
            </Route>
          );
        })}
      </Switch>
      <Footer />
    </>
  </Router>
);

export { App as default };
