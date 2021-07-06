import 'on-the-case';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { namespace as ns } from '../data';
// import Context from './components/context';
import Footer from './components/footer';
import Heading from './components/heading';
import '../scss/styles.scss';

ReactDOM.render(
  <>
    <Heading>The Things I Make and Do</Heading>
    <Footer />
  </>,
  document.querySelector(`.${ns}-app`),
);
