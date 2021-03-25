function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(196);
  rotateY(radians(mouseX));
  rotateX(radians(mouseY));

  // beginShape(QUADS) seems to be no functional!

  beginShape();
  vertex(50, 0, -50);
  vertex(50, -100, -50);
  vertex(-50, -100, -50);
  vertex(-50, 0, -50);
  endShape(CLOSE);

  beginShape();
  vertex(50, 0, 50);
  vertex(50, -100, 50);
  vertex(-50, -100, 50);
  vertex(-50, 0, 50);

  endShape(CLOSE);
}
