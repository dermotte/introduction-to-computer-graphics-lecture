PVector a, b, pos;
float f;

void setup() {
  size(640, 360, P3D);
  a = new PVector(0, 100, -100);
  b = new PVector(100, -100, 0);
  f = 0;
}

void draw() {
  background(0);
  pos = PVector.add(PVector.mult(a, 1-f), PVector.mult(b, f));
  if (f < 1) {
    f = f + 0.01;
  }
  translate(width/2, height/2, 0);
  stroke(255);
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

void mouseReleased() {
  
  f = 0;
}
