void setup() {
  size(640, 480, P3D);
}

void draw() {
  noFill();
  background(255);
  translate(320, 240);
  applyMatrix(  0.8, 0.0, 0.0, 0.0,
                0.0, 2.0, 0.0, 0.0,
                0.0, 0.0, 0.2, 0.0,
                0.0, 0.0, 0.0, 1.0);  
  rotateY(radians(mouseX));
  rotateX(radians(mouseY));
  stroke(0);
  box(120);
}
