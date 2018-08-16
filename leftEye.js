(function() {
  const svgObject = document.querySelector("#svgLogo");

  svgObject.addEventListener("load", function() {
    const svg = svgObject.contentDocument;
    const leftEye = svg.querySelector("#leftEye");
    const currentX = parseInt(leftEye.getAttribute("cx"));
    let posx = currentX;

    document.addEventListener("mousemove", function(event) {
      const { clientX } = event;
      const logoPosX = parseInt(svgObject.offsetLeft, 10);

      let velocity = 0.2;
      if (posx > 78) {
        posx = 78;
      } else if (posx < 70){
        posx = 70;
      }
      
      if (clientX > logoPosX) {
        posx = posx + velocity;
      } else {
        posx = posx - velocity;
      }
      
      leftEye.setAttribute("cx", posx);
    });
  });
})();
