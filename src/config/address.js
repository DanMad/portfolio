import name from './name';

const domains = ['www.', name.first + name.last, '.io'];
const protocol = 'https://';

const address = {
  get domain() {
    return this.domains.join('');
  },
  domains,
  get nakedDomain() {
    return this.domains.slice(1).join('');
  },
  protocol,
  get URL() {
    return this.protocol + this.domain;
  },
};

export { address as default };
