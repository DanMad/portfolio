const unit = 100;

const duration = {
  get boxShadow() {
    return this.unit * 3;
  },
  get color() {
    return this.unit * 3;
  },
  get transform() {
    return this.unit * 5;
  },
  get opacity() {
    return this.unit * 5;
  },
  unit,
};

export { duration as default };
