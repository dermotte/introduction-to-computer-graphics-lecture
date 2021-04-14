float boxX = 0, boxZ = 0;
float camRot = PI/(60*10), currRot = 0;
float b = 200;
boolean left = false, right = false, forward = false, back = false;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  background(128);
  // avatar movement
  if (back)boxZ -= 1.0;
  if (forward) boxZ += 1.0;
  if (left) boxX -= 1.0;
  if (right) boxX += 1.0;
  // bounds
  stroke(#FFE71B);
  line(b, 0, -b, b, 0, b);
  line(-b, 0, b, b, 0, b);
  line(b, 0, -b, -b, 0, -b);
  line(-b, 0, b, -b, 0, -b);
  // orbit camera around (boxX, 0, boxZ)
  camera(boxX, -200, boxZ + 200, // eye 
    boxX, 0, boxZ,     // lookAt
    0, 1, 0);    // camera up vector
  currRot += camRot;
  // avatar
  stroke(0);
  fill(#E87E0C);
  translate(boxX, 0, boxZ);
  box(10);
}

void keyPressed() {
  if (keyCode == UP) {
      back = true;
    }
    if (keyCode == DOWN) {
      forward = true;
    }
    if (keyCode == LEFT) {
      left = true;
    }
    if (keyCode == RIGHT) {
      right = true;
    }
}

void keyReleased() {
  if (keyCode == UP) {
      back = false;
    }
    if (keyCode == DOWN) {
      forward = false;
    }
    if (keyCode == LEFT) {
      left = false;
    }
    if (keyCode == RIGHT) {
      right = false;
    }
}
