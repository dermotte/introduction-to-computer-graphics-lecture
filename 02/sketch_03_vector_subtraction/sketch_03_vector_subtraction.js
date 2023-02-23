let v1, v2, v3;

function setup() {
  createCanvas(640, 480);
  v1 = createVector(200, 200);
  v2 = createVector(40, 80);
  v3 = createVector();

  // subtraction of v1 - v2
  v3.x = v1.x - v2.x;
  v3.y = v1.y - v2.y;

  // in-built method works like this:
  // v3 = p5.Vector.sub(v1, v2);

  // just for visualization:
  noFill();
  strokeWeight(3);  
}

function draw() {
  background(0);
  let base = createVector(100, 100);
  // v1 in draw()
  stroke("#FFFFFF");
  paintArrow(base, v1);
  // ellipse(v1.x, v1.y, 7, 7);
  // v2 in draw()
  stroke("#7777FF");
  paintArrow(p5.Vector.add(base, v1), p5.Vector.mult(v2, -1));
  // v3 in draw()
  stroke("#77FF77");
  paintArrow(base, v3);
}

// draw an arrow for a vector at a given base position
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
