import chroma from 'chroma-js';

const toP3 = (color) => {
  const [r, g, b] = chroma(color).rgb();
  return `color(display-p3 ${(r / 255).toFixed(6)} ${(g / 255).toFixed(6)} ${(b / 255).toFixed(6)})`;
};

export default toP3;
