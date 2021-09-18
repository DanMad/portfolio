import Color from 'color';

const toDisplayP3 = (rgb) => {
  const color = Color(rgb);

  const red = color.red();
  const green = color.green();
  const blue = color.blue();
  const alpha = color.alpha();

  let displayP3 = `color(display-p3 ${red / 255} ${green / 255} ${blue / 255}`;

  if (alpha !== 1) {
    displayP3 += ` / ${alpha * 100}%`;
  }

  displayP3 += ')';

  return displayP3;
};

export { toDisplayP3 as default };
