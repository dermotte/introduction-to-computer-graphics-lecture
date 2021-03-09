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
   // interaction is in the next file ...
   // v1.x = mouseX;
   // v1.y = mouseY;
   // draw:
   line(0, 0, v1.x, v1.y);
   line(0, 0, v2.x, v2.y);
   // compute dot product:
   let temp = v1.dot(v2)/(v1.mag()*v2.mag());
   text("angle between v1 and v2 is " +
    degrees(acos(temp)), 200, 200);
}
