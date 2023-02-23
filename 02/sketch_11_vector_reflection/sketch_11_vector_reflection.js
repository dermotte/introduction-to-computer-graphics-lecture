let v1, v2, n;

function setup() {
  createCanvas(640, 480);
  v1 = createVector(120, 60);
  v2 = createVector(40, 200);
  n = createVector(0, 1);
}

function draw() {
  background(0);
  stroke(255);
  v1 = createVector(320 - mouseX, 480 - mouseY);
  v2 = p5.Vector.add(v1, p5.Vector.mult(n, -2 * p5.Vector.dot(n, v1)));
  // draw:
  paintArrow(createVector(320 - v1.x, 480 - v1.y), v1);
  paintArrow(createVector(320, 480), v2);
}

function paintArrow(base, vec) {
  push();
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}