let a, b, l;

function setup() {
  createCanvas(640, 480);
  a = createVector(20, 240);
  b = createVector(620, 240);
  f = 0;
}

function draw() {
  background(0);
  stroke(255);
  let position = p5.Vector.add(p5.Vector.mult(a, 1-f), p5.Vector.mult(b, f));
  ellipse(position.x, position.y, 10, 10);
  if (f < 1) {
    f = f + 0.01;
  }
}


function mouseReleased() {
  f = 0
}
