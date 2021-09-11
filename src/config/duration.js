const unit = 100;

const duration = {
  get pageIn() {
    return this.unit * 3;
  },
  get pageOut() {
    return this.pageIn + this.themeChange;
  },
  get themeChange() {
    return this.unit * 2;
  },
  unit,
};

export { duration as default };
