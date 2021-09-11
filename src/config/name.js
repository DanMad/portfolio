const first = 'daniel';
const last = 'maddison';

const name = {
  first,
  get full() {
    return this.first + ' ' + this.last;
  },
  get initials() {
    return this.first.charAt(0) + this.last.charAt(0);
  },
  last,
};

export { name as default };
