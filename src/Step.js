function Step(steps = 0, current) {
  this.steps = steps;
  this.current = current;
}

Step.prototype.next = function() {
  if (this.current !== this.steps) this.current++;
};

Step.prototype.prev = function() {
  if (this.current !== 0) this.current--;
};

const _default = Step;
export { _default as default };
