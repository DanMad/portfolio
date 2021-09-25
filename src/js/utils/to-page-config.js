import 'on-the-case';
import defaultTheme from '../../config/theme';
import toCSSVariable from './to-css-variable';
import toDisplayP3 from './to-display-p3';

const toPageConfig = (name, options = {}) => {
  const pageConfig = {
    fileName: 'index.html',
    path: '',
    title: name.toTitleCase().trim(),
    styles: '<style>:root{',
  };

  if (options.renameFile !== undefined && options.renameFile) {
    pageConfig.fileName = name.toKebabCase().trim() + '.html';
  }

  if (options.parentRoute !== undefined) {
    pageConfig.path += options.parentRoute.toKebabCase().trim() + '/';
  }

  if (options.route === undefined || options.route) {
    pageConfig.path += name.toKebabCase().trim() + '/';
  }

  let theme = defaultTheme;

  if (options.theme !== undefined) {
    theme = { ...defaultTheme, ...options.theme };
  }

  Object.keys(theme).map((themeVar) => {
    pageConfig.styles += toCSSVariable(themeVar) + `:${theme[themeVar]};`;
    // pageConfig.styles += toCSSVariable(themeVar + '-double') + `:${theme[themeVar]};`;
  });

  pageConfig.styles += '}@supports(color:color(display-p3 1 1 1)){:root{';

  Object.keys(theme).map((themeVar) => {
    pageConfig.styles +=
      toCSSVariable(themeVar) + `:${toDisplayP3(theme[themeVar])};`;
    // pageConfig.styles +=
    //   toCSSVariable(themeVar + '-double') + `:${toDisplayP3(theme[themeVar])};`;
  });

  pageConfig.styles += '}}</style>';

  return pageConfig;
};

export { toPageConfig as default };
