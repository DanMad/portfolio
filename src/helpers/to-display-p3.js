import chroma from 'chroma-js';

const toDisplayP3 = (color) => {
  const [r, g, b, a] = chroma(color).rgba();
  return `color(display-p3 ${r / 255} ${g / 255} ${b / 255}${a < 1 ? ` / ${a}` : ''})`;
};

export default toDisplayP3;
