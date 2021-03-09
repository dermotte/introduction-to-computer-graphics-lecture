float fov = PI/3.0;
int rows = 128;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  noFill();
  background(255);
  float cameraZ = ((height/2.0) / tan(PI*60.0/360.0));
  perspective(fov, width/height, cameraZ/10.0, cameraZ*10.0);
     
  translate(320-rows/2*20, mouseY, 0);
  for (int x = 0; x < rows; x++) {
    translate(0, 0, -20);
    for (int y = 0; y < rows; y++) {
      translate(20, 0, 0);
      rotateY(radians(mouseX));
      box(5);
      rotateY(radians(-mouseX));
    }
    translate(-20*rows, 0);
  }
  
}

void mouseWheel(MouseEvent event) {
  fov += event.getCount()*PI/16;
}
