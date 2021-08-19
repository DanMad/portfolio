const name = {
  first: 'daniel',
  last: 'maddison',
};

name.initials = name.first.charAt(0) + name.last.charAt(0);

const namespace = name.initials;
const created = '2021-08-06';
const domain = 'www.danielmaddison.io';
const pages = ['', 'about', 'contact', 'portfolio'];
const protocol = 'https://';

const config = {
  domain,
  namespace,
  pages,
  protocol,
};

export { config as default, domain, namespace, pages, protocol };
