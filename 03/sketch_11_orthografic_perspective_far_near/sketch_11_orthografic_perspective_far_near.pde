boolean ortho = false;
int rows = 32;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  noFill();
  background(255);
  if (ortho) 
    ortho(-width/2, width/2, -height/2, height/2, mouseY, 1000);
  
  else perspective();
  camera(320, 120,  200, // eye 
      320, 240, 0, // target
      0, 1, 0); // up
      
  translate(320-rows/2*20, 240, -600);
  for (int x = 0; x < rows; x++) {
    translate(0, 0, 20);
    for (int y = 0; y < rows; y++) {
      translate(20, 0);
      rotateY(radians(mouseX));
      box(5);
      rotateY(radians(-mouseX));
    }
    translate(-20*rows, 0);
  }
  
}

void mouseReleased() {
  ortho = !ortho;
}
