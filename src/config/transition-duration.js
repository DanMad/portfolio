const transitionDuration = {
  _baseTiming: 250,
  get transformIn() {
    return this._baseTiming;
  },
  get transformInOut() {
    return this._baseTiming;
  },
  get transformOut() {
    return this._baseTiming * 2;
  },
};

export { transitionDuration as default };
