import ns from './namespace';

const toStyles = (bg, fg) =>
  '<style>' +
  `body{` +
  `background-color:${bg}!important;` +
  `color:${fg};` +
  '}' +
  '</style>';

const pages = [
  {
    title: 'welcome',
  },
  {
    filename: '404.html',
    title: 'uh-oh!',
  },
  {
    get dirname() {
      return `./${this.title.toKebabCase()}/`;
    },
    title: 'about',
  },
  {
    get dirname() {
      return `./${this.title.toKebabCase()}/`;
    },
    title: 'contact',
  },
  {
    get dirname() {
      return `./${this.title.toKebabCase()}/`;
    },
    title: 'portfolio',
  },
  {
    get dirname() {
      return `./portfolio/${this.title.toKebabCase()}/`;
    },
    title: 'a galaxy far far away',
    get styles() {
      return toStyles('#000', '#fff');
    },
  },
];

export { pages as default };
