float eyeZ = 200;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  noFill();
  background(255);
  // camera(eyeX, eyeY, eyeZ, 
  //     centerX, centerY, centerZ, 
  //     upX, upY, upZ);
  camera(mouseX, mouseY,  eyeZ, 
      320, 240, 0,
      0, 1, 0);
  translate(320, 240);
  box(120);
}

void mouseWheel(MouseEvent event) {
  eyeZ += 5*event.getCount();
}
