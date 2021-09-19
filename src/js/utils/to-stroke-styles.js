const toStrokeStyles = (linkIndex, linkRefs) => {
  const strokeStyles = {
    left: 0,
    width: linkRefs.current[linkIndex].offsetWidth,
  };

  for (let i = 0; i <= linkIndex; i++) {
    if (i === linkIndex) {
      strokeStyles.left += linkRefs.current[i].offsetWidth / 2;
    } else {
      strokeStyles.left += linkRefs.current[i].offsetWidth + 24;
    }
  }

  return strokeStyles;
};

export { toStrokeStyles as default };
