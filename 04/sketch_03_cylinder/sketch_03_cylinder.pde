int segments = 12;
float radius = 50;
float len = 200;

void setup() {
  size(640, 480, P3D);
}

void draw() {
  background(0);
  translate(320, 240);
  rotateY(radians(mouseX));
  
  beginShape(QUADS);
  
  for (int i = 0; i < segments; i++) {
    vertex(-len/2, radius * cos(i*2*PI/segments), radius * sin(i*2*PI/segments));
    vertex(-len/2, radius * cos((i+1)*2*PI/segments), radius * sin((i+1)*2*PI/segments));
    vertex(len/2, radius * cos((i+1)*2*PI/segments), radius * sin((i+1)*2*PI/segments));
    vertex(len/2, radius * cos(i*2*PI/segments), radius * sin(i*2*PI/segments));
  }
  
  endShape();
}
