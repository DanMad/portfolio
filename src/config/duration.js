const unit = 100;

const duration = {
  get boxShadow() {
    return this.unit * 2;
  },
  get color() {
    return this.unit * 2;
  },
  get left() {
    return this.unit * 3;
  },
  get opacity() {
    return this.unit * 3;
  },
  get transform() {
    return this.unit * 3;
  },
  get width() {
    return this.unit * 3;
  },
  unit,
};

export { duration as default };
