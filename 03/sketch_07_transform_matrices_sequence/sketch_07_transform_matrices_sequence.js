function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  // rotates around world's y-axis
  rotateY(radians(mouseX));
  translate(0, 0, 100);
  // rotates around model's x-axis
  rotateX(radians(mouseY));

  stroke(0);
  box(120);
}
