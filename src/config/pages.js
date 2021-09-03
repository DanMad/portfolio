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
      return './' + this.title + '/';
    },
    title: 'about',
  },
  {
    get dirname() {
      return './' + this.title + '/';
    },
    title: 'contact',
  },
  {
    get dirname() {
      return './' + this.title + '/';
    },
    title: 'portfolio',
  },
];

export { pages as default };
