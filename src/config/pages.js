import 'on-the-case';
import toPageConfig from '../js/utils/to-page-config';

const pages = [
  toPageConfig('ocds', {
    parentRoute: 'portfolio',
    theme: {
      backgroundPrimary: 'yellow',
    },
  }),
  toPageConfig('a galaxy far, far away', {
    parentRoute: 'portfolio',
    theme: {
      backgroundPrimary: '#000',
    },
  }),
  toPageConfig('contact'),
  toPageConfig('about'),
  toPageConfig('portfolio'),
  toPageConfig('portfolio', {
    route: false,
  }),
  toPageConfig('404', {
    renameFile: true,
    route: false,
  }),
];

export { pages as default };
