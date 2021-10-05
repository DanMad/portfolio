const toOrientation = (ref) => {
  const height = ref.current.offsetHeight;
  const width = ref.current.offsetWidth;

  return width <= height ? 'portrait' : 'landscape';
};

export { toOrientation as default };
