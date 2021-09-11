const hasDisplayP3Support = () =>
  CSS.supports('color: color(display-p3 0 0 0)');

export { hasDisplayP3Support as default };
