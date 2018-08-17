const reaction = {
  width: 200,
  height: 50,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  direction: 1,
  element: "<div />",
  setElement: function(element) {
    this.element = element;
  },
  setPosition: function(x, y) {
    this.x = x; 
    this.y = y;
  },
  setPositionX: function(x) {
    this.x = x;
  },
  setPositionY: function(y) {
    this.y = y;
  },
  setVelocityX: function(vx) {
    this.vx = vx;
  },
  draw: function() {
    const div = this.element
    div.textContent = this.text;
    div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    this.element = div;
  },
  update: function() {
    this.x += this.vx;
    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
};
