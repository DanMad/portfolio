const toStrokeStyles = (linkIndex, linkRefs) => {
  let left = 0;

  for (let i = 0; i <= linkIndex; i++) {
    if (i === linkIndex) {
      left += linkRefs.current[i].offsetWidth / 2;
    } else {
      left += linkRefs.current[i].offsetWidth + 24;
    }
  }

  return {
    left,
    width: linkRefs.current[linkIndex].offsetWidth,
  };
};

export { toStrokeStyles as default };
