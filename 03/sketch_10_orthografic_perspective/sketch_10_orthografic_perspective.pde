boolean ortho = false;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  noFill();
  background(255);
  if (ortho) ortho();
  else perspective();
  camera(mouseX, mouseY,  200, // eye
      320, 240, 0, // target
      0, 1, 0); // up
  translate(320, 240);
  box(120);
}

void mouseReleased() {
  ortho = !ortho;
}
