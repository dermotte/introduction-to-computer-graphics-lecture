int segments = 64;
float radius = 100;
float len = 200;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  background(64);
  translate(320, 240);
  // ambientLight(255, 255, 255);
  // directionalLight(255, 255, 255, 0, -1, 0);
  pointLight(255, 255, 255, 640, 0, 200);
  rotateY(radians(mouseX));
  rotateZ(radians(mouseY));
  
  beginShape(TRIANGLES);
  for (int i = 0; i < segments; i++) {
    vertex(-len/2, 0, 0); // tip of the cone
    vertex(len/2, radius * cos((i)*2*PI/segments), radius * sin((i)*2*PI/segments));
    vertex(len/2, radius * cos((i+1)*2*PI/segments), radius * sin((i+1)*2*PI/segments));
  }
  endShape();
}
