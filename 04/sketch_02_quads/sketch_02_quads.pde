void setup() {
  size(640, 480, P3D);
}

void draw() {
  background(0);
  // noFill();
  translate(320, 240);
  rotateY(radians(mouseX));
  
  beginShape(QUADS);
  
  vertex(50, 0, -50);
  vertex(50, -100, -50);
  vertex(-50, -100, -50);
  vertex(-50, 0, -50);
  
  vertex(50, 0, 50);
  vertex(50, -100, 50);
  vertex(-50, -100, 50);
  vertex(-50, 0, 50);
  
  endShape();
}
