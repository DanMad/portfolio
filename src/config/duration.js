const unit = 100;

const duration = {
  get pageTransitionIn() {
    return this.unit * 3;
  },
  get pageTransitionOut() {
    return this.pageTransitionIn + this.themeTransition;
  },
  get themeTransition() {
    return this.unit * 2;
  },
  unit,
};

export { duration as default };
