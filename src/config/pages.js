import 'on-the-case';
import toPageConfig from '../js/utils/to-page-config';

const pages = [
  toPageConfig('ocds', {
    parentRoute: 'portfolio',
    theme: {
      accent: 'rgb(17, 160, 173)',
      backgroundPrimary: 'rgb(249, 248, 248)',
      backgroundSecondary: 'rgb(236, 235, 235)',
      lighting: 'rgba(193, 10, 10, 0.03)',
    },
  }),
  toPageConfig('a galaxy far, far away', {
    parentRoute: 'portfolio',
    theme: {
      accent: 'rgb(244, 80, 10)',
      backgroundPrimary: 'rgb(10, 15, 23)',
      backgroundSecondary: 'rgb(1, 2, 3)',
      backgroundTertiary: 'green',
      lighting: 'rgba(193, 10, 10, 0.03)',
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
