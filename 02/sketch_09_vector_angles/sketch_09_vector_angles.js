let v1, v2;

function setup() {
  createCanvas(640, 480);
  v1 = createVector(120, 60);
  v2 = createVector(40, 200);
  // noLoop();
}

function draw() {
   background(0);
   stroke(255);
   // draw:
   paintArrow(createVector(0, 0), v1);
   paintArrow(createVector(0, 0), v2);
   // compute dot product:
   let temp = v1.dot(v2)/(v1.mag()*v2.mag());
   text("angle between v1 and v2 is " +
    degrees(acos(temp)), 200, 200);
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