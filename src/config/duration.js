const unit = 50;

const duration = {
  get boxShadow() {
    return this.unit * 4;
  },
  get color() {
    return this.unit * 4;
  },
  get left() {
    return this.unit * 6;
  },
  get opacity() {
    return this.unit * 6;
  },
  get transform() {
    return this.unit * 6;
  },
  get width() {
    return this.unit * 6;
  },
  unit,
};

export { duration as default };
