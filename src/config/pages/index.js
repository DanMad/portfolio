import 'on-the-case';
import name from '../name';
import toPageConfig from './to-page-config';

const pages = [
  toPageConfig("open colleges' design system", {
    description: "An accessible design system built for Open Colleges' LMS.",
    image: 'assets/example.png',
    imageAlt: '',
    path: 'portfolio',
    theme: {
      accent: 'rgb(17, 160, 173)',
      backgroundPrimary: 'rgb(249, 248, 248)',
      backgroundSecondary: 'rgb(236, 235, 235)',
      backgroundTertiary: 'rgb(236, 235, 235)',
      lighting: 'rgba(193, 10, 10, 0.03)',
    },
  }),
  toPageConfig('a galaxy far, far away', {
    description: 'A Visual Studio Code theme from a galaxy far, far away...',
    image: 'assets/example.png',
    imageAlt: '',
    path: 'portfolio',
    theme: {
      accent: 'rgb(244, 80, 10)',
      backgroundPrimary: 'rgb(10, 15, 23)',
      backgroundSecondary: 'rgb(1, 2, 3)',
      backgroundTertiary: 'green',
      lighting: 'rgba(193, 10, 10, 0.03)',
    },
  }),
  toPageConfig('contact', {
    description: `How to get in touch with ${name.first.toTitleCase()}.`,
  }),
  toPageConfig('about', {
    description: `A little bit of background on ${name.first.toTitleCase()}.`,
  }),
  toPageConfig('portfolio'),
  toPageConfig('portfolio', { path: false }),
  toPageConfig('404', { filename: '404.html', path: false, robots: false }),
];

export { pages as default };
