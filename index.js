const reactions = [];
const elements = ["bioexpert", "patricia", "panther", "mariposa"];

for (i = 0; i < elements.length; i++) {
  const element = document.querySelector(`#${elements[i]}`);
  reaction.setElement(element);
  reactions.push(Object.assign({}, reaction));
}

const run = () => {
  reactions.forEach(function(r) {
    r.setVelocityX(Math.random() * 4);
    r.update();
  });
  requestAnimationFrame(run);
};
