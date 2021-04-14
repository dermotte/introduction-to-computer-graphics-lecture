float boxX = 0, boxZ = 0;
float camX = 0, camZ = 0;
float streetLength = 60, streetWidth = 80;
boolean left = false, right = false, forward = false, back = false;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  background(128);
  // avatar movement
  if (back) {
    boxZ -= 1.0;
  }
  if (forward) {
    boxZ += 1.0;
  }
  if (left) {
    boxX -= 1.0;
  }
  if (right) {
    boxX += 1.0;
  }

  // street
  makeStreet();
  // spring follow camera
  if (abs(camX - boxX) > 0.01) {
    camX += (-camX + boxX)/32.0;
  } else {
      camX = boxX;
  }
  if (abs(camZ - boxZ+120) > 0.01) {
    camZ += (-camZ + boxZ +120)/16.0;
  } else {
      camZ = boxZ+120;
  }
  
  camera(camX, -60, camZ, // eye 
    boxX, 0, boxZ,     // lookAt
    0, 1, 0);    // camera up vector
  // avatar
  fill(#E87E0C);
  translate(boxX, 0, boxZ);
  sphere(10);
}

// makes a curving road
void makeStreet() {
  fill(#8B0CE8);
  for (float i = 0; i < streetLength; i++) {
    float offset = sin(i/3)*30;
    translate(-streetWidth/2 + offset, 0, 0);
    box(10);
    translate(streetWidth, 0, 0);
    box(10);
    translate(-streetWidth/2-offset, 0, -40);
  }
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
