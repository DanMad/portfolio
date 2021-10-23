const toOrientation = (ref) => {
  let orientation = 'portrait';

  const height = ref.current?.offsetHeight;
  const width = ref.current?.offsetWidth;

  if (width > height) {
    orientation = 'landscape';
  }

  return orientation;
};

export { toOrientation as default };
