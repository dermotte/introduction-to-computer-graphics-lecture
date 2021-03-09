PVector v1, v2;

void setup() {
   size(640, 480);
   v1 = new PVector(120, 60);
   v2 = new PVector(40, 200);
   noLoop();
}

void draw() {
   background(0);
   stroke(255);
   // draw:
   line(0, 0, v1.x, v1.y);
   line(0, 0, v2.x, v2.y);
   // compute dot product:
   float temp = v1.dot(v2)/(v1.mag()*v2.mag());
   text("angle between v1 and v2 is " + 
    degrees(acos(temp)), 200, 200);
}