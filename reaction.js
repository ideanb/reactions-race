const reaction = {
  x: 0,
  y: 0,
  vx: 0,
  direction: 1,
  element: "<div />",
  update: function() {
    this.x += this.vx;
    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
};
