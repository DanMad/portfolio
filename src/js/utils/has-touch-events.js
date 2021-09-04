const hasTouchEvents = () =>
  'ontouchstart' in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

export { hasTouchEvents as default };
