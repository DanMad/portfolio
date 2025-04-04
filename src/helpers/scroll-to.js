const scrollTo = ({ left = 0, top = 0 }, behavior = 'smooth') => {
  const rootElement = document.querySelector('#root');

  if (!rootElement) {
    return;
  }

  rootElement.scrollTo({ behavior, left, top });
};

export default scrollTo;
