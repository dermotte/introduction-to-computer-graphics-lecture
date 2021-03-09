void setup() {
  size(640, 480, P3D);
}

void draw() {
  noFill();
  background(255);
  // rotates around world's y-axis
  rotateY(radians(mouseX));
  translate(320, 240);
  // rotates around model's x-axis
  rotateX(radians(mouseY));
  
  stroke(0);
  box(120);
}
