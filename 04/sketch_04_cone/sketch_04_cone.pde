int segments = 32;
float radius = 50;
float len = 100;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  background(64);
  translate(320, 240);
  rotateY(radians(mouseX));
  
  beginShape(TRIANGLES);
  for (int i = 0; i < segments; i++) {
    vertex(-len, 0, 0); // tip of the cone
    vertex(0, radius * cos((i)*2*PI/segments), radius * sin((i)*2*PI/segments));
    vertex(0, radius * cos((i+1)*2*PI/segments), radius * sin((i+1)*2*PI/segments));
  }
  endShape();
}
