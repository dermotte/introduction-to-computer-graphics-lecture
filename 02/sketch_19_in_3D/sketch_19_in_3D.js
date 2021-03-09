let a, b, l;

function setup() {
  createCanvas(640, 480, WEBGL);
  a = createVector(0, 100, -100);
  b = createVector(100, -100, 0);
  f = 0;
}

function draw() {
  background(0);
  stroke(255);
  let pos = p5.Vector.add(p5.Vector.mult(a, 1-f), p5.Vector.mult(b, f));
  if (f < 1) {
    f = f + 0.01;
  }
  // translate(width/2, height/2, 0);

  rotateX(radians(mouseY));
  rotateY(radians(mouseX));
  noFill();
  strokeWeight(3);
  line(0, 0, 0, a.x, a.y, a.z);
  line(0, 0, 0, b.x, b.y, b.z);
  // line(0, 0, 0, pos.x, pos.y, pos.z);

  translate(pos.x, pos.y, pos.z);
  box(20);
}


function mouseReleased() {
  f = 0
}
