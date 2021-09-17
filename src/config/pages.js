import 'on-the-case';
import { toDisplayP3 } from '../js/utils';
import defaultTheme from './theme';
import ns from './namespace';

// class Page {
//   constructor(name, options = {}) {
//     this.name = name.trim();
//     this.dirname = this.name.toKebabCase() + '/';
//     this.filename = 'index.html';
//     this.theme = { ...defaultTheme };
//     this.title = this.name.toTitleCase();

//     if ('dirname' in options) {
//       this.dirname = '';

//       if (options.dirname && typeof options.dirname === 'string') {
//         this.dirname = options.dirname.trim() + '/';
//       }
//     }

//     if ('filename' in options) {
//       this.filename = options.filename.toKebabCase().trim() + '.html';
//     }

//     if ('theme' in options) {
//       if ('backgroundPrimary' in options.theme) {
//         this.theme.backgroundPrimary = options.theme.backgroundPrimary;
//       }

//       if ('backgroundSecondary' in options.theme) {
//         this.theme.backgroundSecondary = options.theme.backgroundSecondary;
//       }
//     }

//     this.from = new RegExp('/' + this.dirname.slice(0, -1));
//     this.to = '/' + this.dirname + this.filename;
//   }

//   toStyles = () => (
//     `<style>body{background:${this.theme.backgroundPrimary};color:${this.theme.backgroundSecondary};}</style>`
//   );
// }

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

  Object.keys(theme).map((themeKey) => {
    styles += `--${ns}-${themeKey.toKebabCase()}:${theme[themeKey]};`;
  });

  styles += '}@supports(color:color(display-p3 1 1 1)){:root{';

  Object.keys(theme).map((themeKey) => {
    styles += `--${ns}-${themeKey.toKebabCase()}:${toDisplayP3(
      theme[themeKey],
    )};`;
  });

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
