int segments = 64;
float radius = 50;
float len = 100;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  // noStroke();
  background(64);
  ambientLight(255, 255, 255);
  // pointLight(255, 255, 255, 320, 0, 200);
  translate(320, 240);
  rotateY(radians(294));
  rotateZ(radians(144));
  
  beginShape(TRIANGLES);
  for (int i = 0; i < segments; i++) {
    vertex(-len, 0, 0); // tip of the cone
    vertex(0, radius * cos((i)*2*PI/segments), radius * sin((i)*2*PI/segments));
    vertex(0, radius * cos((i+1)*2*PI/segments), radius * sin((i+1)*2*PI/segments));
  }
  endShape();
}

void mouseReleased() {
  print(mouseX);
  print(mouseY);
}
