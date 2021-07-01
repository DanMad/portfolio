const toRange = (start, end) => {
  if (start === end) {
    return `${end}`;
  }

  if (start > end) {
    return `${end}–${start}`;
  }

  return `${start}–${end}`;
};

export { toRange as default };
