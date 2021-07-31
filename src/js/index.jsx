import 'on-the-case';
// import Color from 'color';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { namespace as ns } from '../data';
// import Context from './components/context';
import Footer from './components/footer';
import Heading from './components/heading';
import '../scss/styles.scss';

// const colors = {
//   alabaster: Color('#f6f6f8'),
//   carnation: Color('#f55252'),
//   roseBud: Color('#fbb1b1'),
//   bunker: Color('#0a0f17'),
//   green: Color('#38b845'),
// };

// console.log(`Alabaster is dark: ${colors.alabaster.isDark()}`);
// console.log(`Carnation is dark: ${colors.carnation.isDark()}`);
// console.log(`Rose Bud is dark: ${colors.roseBud.isDark()}`);
// console.log(`Bunker is dark: ${colors.bunker.isDark()}`);
// console.log(`Green is dark: ${colors.bunker.isDark()}`);

ReactDOM.render(
  <>
    <Heading>The Things I Make and Do</Heading>
    {/* {Object.keys(colors).map((key) => (
      <>
        <p>Key: {key}</p>
        <p>Value: {colors[key].hex()}</p>
      </>
    ))} */}
    <Footer />
  </>,
  document.querySelector(`.${ns}-app`),
);
