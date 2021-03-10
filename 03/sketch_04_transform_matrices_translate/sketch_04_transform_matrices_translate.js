function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  // translate(320, 240);
  // NOTE: it's a column major system (OpenGL) .. but in p5js it's ro-major ;)
  // in Processing
  applyMatrix(  1.0, 0.0, 0.0, 0,
                0.0, 1.0, 0.0, 0,
                0.0, 0.0, 1.0, 0.0,
                100, 50, 0.0, 1.0);
  stroke(0);
  box(120);
}
