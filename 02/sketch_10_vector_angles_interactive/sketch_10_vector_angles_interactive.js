let v1, v2;

function setup() {
   createCanvas(640, 480);
   v1 = createVector(120, 60);
   v2 = createVector(40, 200);
   textSize(24);
   textAlign(CENTER, CENTER);
}

function draw() {
   background(0);
   stroke(255);
   v2 = createVector(mouseX-320, mouseY-240);
   // draw:
   line(320, 240, 320+v1.x, 240+v1.y);
   line(320, 240, 320+v2.x, 240+v2.y);
   // compute dot product:
   let temp = v1.dot(v2)/(v1.mag()*v2.mag());
   text("angle between v1 and v2 is " + round(degrees(acos(temp))), 320, 240);
}
