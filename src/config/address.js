import name from './name';

const protocol = 'https://';
const secondLevelDomain = name.first + name.last;
const thirdLevelDomain = 'www.';
const topLevelDomain = '.io';

const address = {
  get domain() {
    return this.thirdLevelDomain + this.secondLevelDomain + this.topLevelDomain;
  },
  protocol,
  secondLevelDomain,
  thirdLevelDomain,
  topLevelDomain,
  get URL() {
    return this.protocol + this.domain;
  },
};

export { address as default };
