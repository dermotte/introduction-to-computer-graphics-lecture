PVector a, b, position;
float f;

void setup() {
  size(640, 480);
  a = new PVector(20, 240);
  b = new PVector(620, 240);
  f = 0;
}

void draw() {
  background(0);
  stroke(255);
  position = PVector.add(PVector.mult(a, 1-f), PVector.mult(b, f));
  ellipse(position.x, position.y, 10, 10);
  if (f < 1) {
    f = f + 0.01;
  }
}

void mouseReleased() {
  a = new PVector(position.x, position.y);
  b = new PVector(mouseX, mouseY);
  f = 0;
}
