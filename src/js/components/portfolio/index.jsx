// import { useEffect, useRef, useState } from 'react';
// // import Context from '../context';
// import Heading from './heading';
// import '../../scss/styles.scss';

// const useEventListener = (eventName, handler, element = window) => {
//   const savedHandler = useRef();

//   useEffect(() => {
//     savedHandler.current = handler;
//   }, [handler]);

//   useEffect(() => {
//     const isSupported = element && element.addEventListener;

//     if (!isSupported) {
//       return;
//     }

//     const eventListener = (event) => savedHandler.current(event);

//     element.addEventListener(eventName, eventListener);

//     return () => {
//       element.removeEventListener(eventName, eventListener);
//     };
//   }, [eventName, element]);
// };

const Portfolio = () => {
  //   const [slide, setSlide] = useState(0);

  //   const handleKeyDown = (e) => {
  //     // Key down
  //     if (e.keyCode === 40) {
  //       if (slide < projects.length - 1) {
  //         setSlide(slide + 1);
  //       }
  //     }

  //     // Key up
  //     if (e.keyCode === 38) {
  //       if (slide > 0) {
  //         setSlide(slide - 1);
  //       }
  //     }
  //   }

  //   useEventListener('keydown', handleKeyDown);

  return <h1>The Things I Make and Do.</h1>;
};

// // // import Color from 'color';

// // // const colors = {
// // //   alabaster: Color('#f6f6f8'),
// // //   carnation: Color('#f55252'),
// // //   roseBud: Color('#fbb1b1'),
// // //   bunker: Color('#0a0f17'),
// // //   green: Color('#38b845'),
// // // };

// // // console.log(`Alabaster is dark: ${colors.alabaster.isDark()}`);
// // // console.log(`Carnation is dark: ${colors.carnation.isDark()}`);
// // // console.log(`Rose Bud is dark: ${colors.roseBud.isDark()}`);
// // // console.log(`Bunker is dark: ${colors.bunker.isDark()}`);
// // // console.log(`Green is dark: ${colors.bunker.isDark()}`);

export { Portfolio as default };
