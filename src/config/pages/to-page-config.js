import 'on-the-case';
import toCSSVariable from '../../js/utils/to-css-variable';
import toDisplayP3 from '../../js/utils/to-display-p3';
import address from '../address';
import name from '../name';
import theme from '../theme';

const toPageConfig = (title, options = {}) => {
  let author = name.full.toTitleCase();

  if (options.author) {
    author = options.author.trim();
  }

  let description = `A compilation of the stuff ${name.first.toTitleCase()} makes and the things ${name.first.toTitleCase()} does.`;

  if (!!options.description) {
    description = options.description.trim();
  }

  let filename = 'index.html';

  if (options.filename) {
    filename = options.filename.trim();
  }

  let image = '/assets/social-image-default.png';

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

  if (typeof options.robots === 'string' && !!options.robots) {
    robots = options.robots.trim();
  } else if (typeof options.robots === 'boolean' && !options.robots) {
    robots = 'noindex, nofollow';
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

  // Doesn't support var()
  // let themeColor = `var(${toCSSVariable('accent')})`;
  let themeColor = mergedTheme.accent;

  if (options.themeColor) {
    themeColor = options.themeColor.trim();
  }

  let URL = address.URL + '/' + path;

  if (filename !== 'index.html') {
    URL += '/' + filename;
  }

  return {
    author,
    description,
    filename,
    image,
    imageAlt,
    path,
    robots,
    styles,
    themeColor,
    URL,
    title: title.toTitleCase().trim() + ' | ' + address.nakedDomain,
  };
};

export { toPageConfig as default };
