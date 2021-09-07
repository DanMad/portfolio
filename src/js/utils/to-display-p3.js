import Color from 'color';

const toDisplayP3 = (color) => {
  const r = Color(color).red();
  const g = Color(color).green();
  const b = Color(color).blue();
  const a = Color(color).alpha();

  let statement = `color(display-p3 ${r / 255} ${g / 255} ${b / 255}`;

  if (a !== 1) {
    statement += ` / ${a * 100}%`;
  }

  statement += ')';

  return statement;
};

export { toDisplayP3 as default };
