import 'on-the-case';
import toCSSVariable from '../js/utils/to-css-variable';
import toDisplayP3 from '../js/utils/to-display-p3';
import defaultTheme from './theme';

const page = (name, args = {}) => {
  let fileName = 'index.html';

  if (args.renameFile !== undefined && args.renameFile) {
    fileName = name.toKebabCase().trim() + '.html';
  }

  let path = '';

  if (args.parentRoute !== undefined) {
    path += args.parentRoute.toKebabCase().trim() + '/';
  }

  if (args.route === undefined || args.route) {
    path += name.toKebabCase().trim() + '/';
  }

  let theme = { ...defaultTheme };

  if (args.theme !== undefined) {
    theme = { ...defaultTheme, ...args.theme };
  }

  let styles = '<style>:root{';

  for (const themeVar of Object.keys(theme)) {
    styles += toCSSVariable(themeVar) + `:${theme[themeVar]};`;
  }

  styles += '}@supports(color:color(display-p3 1 1 1)){:root{';

  for (const themeVar of Object.keys(theme)) {
    styles += toCSSVariable(themeVar) + `:${toDisplayP3(theme[themeVar])};`;
  }

  styles += '}}</style>';

  return {
    fileName,
    path,
    styles,
    title: name.toTitleCase().trim(),
  };
};

const pages = [
  page('ocds', {
    parentRoute: 'portfolio',
    theme: {
      backgroundPrimary: 'yellow',
    },
  }),
  page('a galaxy far, far away', {
    parentRoute: 'portfolio',
    theme: {
      backgroundPrimary: '#000',
    },
  }),
  page('contact'),
  page('about'),
  page('portfolio'),
  page('portfolio', {
    route: false,
  }),
  page('404', {
    renameFile: true,
    route: false,
  }),
];

export { pages as default };
