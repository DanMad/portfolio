import 'on-the-case';
import toCSSVariable from '../../js/utils/to-css-variable';
import toDisplayP3 from '../../js/utils/to-display-p3';
import address from '../address';
import name from '../name';
import theme from '../theme';

const author = name.full;
const themeColor = `var(${toCSSVariable('background-primary')})`;

const toPageConfig = (title, description, options = {}) => {
  let filename = 'index.html';

  if (options.filename) {
    filename = options.filename.trim();
  }

  let image = 'assets/og-img-default.png';

  if (options.image) {
    image = options.image.trim();
  }

  let imageAlt = `A project from ${name.full}'s portfolio`;

  if (options.imageAlt) {
    imageAlt = options.imageAlt.trim();
  }

  let path = title.toKebabCase().trim() + '/';

  if (typeof options.path === 'string' && !!options.path.length) {
    path = options.path.trim() + '/' + path;
  } else if (typeof options.path === 'boolean' && !options.path) {
    path = '';
  }

  let robots = 'index, follow';

  if (options.robots) {
    robots = options.robots.trim();
  }

  const mergedTheme = { ...theme, ...options.theme };
  let styles = '<style>:root{';

  Object.keys(mergedTheme).map((key) => {
    styles += toCSSVariable(key) + `:${mergedTheme[key]};`;
  });

  styles += '}@supports(color:color(display-p3 1 1 1)){:root{';

  Object.keys(mergedTheme).map((key) => {
    styles += toCSSVariable(key) + `:${toDisplayP3(mergedTheme[key])};`;
  });

  styles += '}}</style>';

  let URL = address.URL + '/' + path;

  if (filename !== 'index.html') {
    URL += '/' + filename;
  }

  return {
    author,
    filename,
    image,
    imageAlt,
    path,
    robots,
    styles,
    themeColor,
    URL,
    description: description.trim(),
    title: title.trim() + ' | ' + address.nakedDomain,
  };
};

export { toPageConfig as default };
