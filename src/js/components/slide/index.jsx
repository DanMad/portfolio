// import { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import Heading from '../heading';

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

const Slide = (props) => {
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

  console.log(props.title);

  return (
    <div>
      <div>
        {/* <Heading>{props.title}</Heading> */}
        <p>{props.description}</p>
        <button>View project</button>
      </div>
      <div>{/* {parse(props.innerHTML)} */}</div>
    </div>
  );
  // <h1>The Things I Make and Do.</h1>;
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

export { Slide as default };
