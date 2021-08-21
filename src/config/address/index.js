import name from '../name';

const address = {
  get domain() {
    return this.thirdLevelDomain + this.secondLevelDomain + this.topLevelDomain;
  },
  protocol: 'https://',
  secondLevelDomain: name.first + name.last,
  thirdLevelDomain: 'www.',
  topLevelDomain: '.io',
  get URL() {
    return this.protocol + this.domain;
  },
};

export { address as default };
