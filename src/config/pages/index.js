import 'on-the-case';
import name from '../name';
import toPageConfig from './to-page-config';

const titleCaseName = name.full.toTitleCase();

const pages = [
  toPageConfig(
    "open colleges' design system",
    "An accessible design system built for Open Colleges' Learning Management System.",
    {
      image: 'INSERT IMAGE',
      imageAlt: 'INSERT IMAGE ALT',
      path: 'portfolio',
      theme: {
        // AMEND TOKENS
        accent: 'rgb(17, 160, 173)',
        backgroundPrimary: 'rgb(249, 248, 248)',
        backgroundSecondary: 'rgb(236, 235, 235)',
        lighting: 'rgba(193, 10, 10, 0.03)',
      },
    },
  ),
  toPageConfig(
    'a galaxy far, far away',
    'A Visual Studio Code theme from a galaxy far, far away...',
    {
      image: 'INSERT IMAGE',
      imageAlt: 'INSERT IMAGE ALT',
      path: 'portfolio',
      theme: {
        // AMEND TOKENS
        accent: 'rgb(244, 80, 10)',
        backgroundPrimary: 'rgb(10, 15, 23)',
        backgroundSecondary: 'rgb(1, 2, 3)',
        backgroundTertiary: 'green',
        lighting: 'rgba(193, 10, 10, 0.03)',
      },
    },
  ),
  toPageConfig('contact', `How to get in touch with ${titleCaseName}.`),
  toPageConfig('about', `A little bit of background on ${titleCaseName}.`),
  toPageConfig(
    'portfolio',
    `A compilation of the stuff ${titleCaseName} makes and the things ${titleCaseName} does.`,
  ),
  toPageConfig(
    'portfolio',
    `A compilation of the stuff ${titleCaseName} makes and the things ${titleCaseName} does.`,
    {
      path: false,
    },
  ),
  toPageConfig('404', 'INSERT DESCRIPTION', {
    filename: '404.html',
    path: false,
  }),
];

export { pages as default };
