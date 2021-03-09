PShape s;

void setup() {
  size(640, 480, P3D);
  s = loadShape("torus.obj");
}

void draw() {
  // noFill();
  background(255);
  translate(320, 240);
  scale(60);
  rotateY(radians(mouseX));
  rotateZ(radians(mouseX));
  stroke(0);
  // box(120);
  shape(s, 0, 0);
}
