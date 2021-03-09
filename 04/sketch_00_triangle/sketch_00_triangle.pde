void setup() {
  size(640, 480, P3D);
  noFill();
}

void draw() {
  background(196);
  translate(320, 240);
  rotateY(radians(mouseX));
  
  beginShape(TRIANGLES);
  
  vertex(0, -50, 0);
  vertex(50, 100, 0);
  vertex(-50, 100, 0);
  
  endShape();

}
