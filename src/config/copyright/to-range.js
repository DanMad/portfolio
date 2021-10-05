const toRange = (start, end, separator = '–') => {
  let range;

  if (start === end) {
    range = '' + end;
  } else if (start > end) {
    range = end + separator + start;
  } else {
    range = start + separator + end;
  }

  return range;
};

export { toRange as default };
