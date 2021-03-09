PVector v1, v2, n;

void setup() {
   size(640, 480);
   v1 = new PVector();
   v2 = new PVector();
   n = new PVector(0, 1);
}

void draw() {
   background(0);
   stroke(255);
   v1 = new PVector(320-mouseX, 480-mouseY);
   v2 = PVector.add(v1, PVector.mult(n, -2*PVector.dot(n, v1)));
   // draw:
   drawVector(320-v1.x, 480-v1.y, v1);
   drawVector(320, 480, v2);
}

void drawVector(float x, float y, PVector v) {
   line(x, y, v.x+x, v.y+y);
   ellipse(v.x+x, v.y+y, 5, 5);
}