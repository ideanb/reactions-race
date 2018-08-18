const reactions = [];
const elements = ["bioexpert", "patricia", "panther", "mariposa"];

const finishLine = document.querySelector(".finish-line");
let finished = false;
let winner = "";

for (i = 0; i < elements.length; i++) {
  const element = document.querySelector(`#${elements[i]}`);
  reaction.element = element;
  reactions.push(Object.assign({}, reaction));
}

const run = () => {
  reactions.forEach(function(r) {
    if (r.x >= finishLine.offsetLeft) {
      finished = true;
      winner = r.element.getAttribute("id");
      alert(`The winner is ${winner}`)
    }
    if (!finished) {
      r.vx = Math.random() * 4;
      r.update();
    }
  });
  if (!finished) {
    requestAnimationFrame(run);
  }
};
