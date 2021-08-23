const name = {
  first: 'daniel',
  get full() {
    return `${this.first} ${this.last}`;
  },
  last: 'maddison',
  get initials() {
    return this.first.charAt(0) + this.last.charAt(0);
  },
};

export { name as default };
