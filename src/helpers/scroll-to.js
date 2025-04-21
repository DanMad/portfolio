const scrollTo = ({ left = 0, top = 0 }, behavior = 'smooth') => {
  const rootElement = document.querySelector('#root');

  rootElement.scrollTo({ behavior, left, top });
};

export default scrollTo;
