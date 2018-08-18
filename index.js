const reactions = [];
const elements = ["bioexpert", "patricia", "panther", "mariposa"];

const finishLine = document.querySelector(".finish-line");
let finished = false;
let winner = "";

elements.forEach(function(el, index) {
  const element = document.querySelector(`#${elements[index]}`);
  reaction.element = element;
  reactions.push(Object.assign({}, reaction));
});

const run = () => {
  reactions.forEach(function(r) {
    if (r.x >= finishLine.offsetLeft) {
      finished = true;
      winner = r.element.getAttribute("id");
      alert(`The winner is ${winner}`);
    }
    if (!finished) {
      r.vx = Math.random() * 3;
      r.update();
    }
  });
  if (!finished) {
    requestAnimationFrame(run);
  }
};
