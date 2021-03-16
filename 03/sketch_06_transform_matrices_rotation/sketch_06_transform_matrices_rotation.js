function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
    applyMatrix(  cos(radians(mouseX)), 0.0, -sin(radians(mouseX)), 0.0,
                0.0, 1.0, 0.0, 0.0,
                sin(radians(mouseX)), 0.0, cos(radians(mouseX)), 0.0,
                0.0, 0.0, 0.0, 1.0);
  // this is actually the same matrix:
  // rotateY(radians(mouseX));

  stroke(0);
  box(120);
}
