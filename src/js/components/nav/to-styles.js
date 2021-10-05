const getStyles = (refs, refIndex) => {
  let left = 0;

  for (let i = 0; i <= refIndex; i++) {
    if (i === refIndex) {
      left += refs.current[i].offsetWidth / 2;
    } else {
      left += refs.current[i].offsetWidth + 32;
    }
  }

  return {
    left,
    width: refs.current[refIndex].offsetWidth,
  };
};

export { getStyles as default };
