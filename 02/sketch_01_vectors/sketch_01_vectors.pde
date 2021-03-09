PVector v1, v2;

void setup() {
  size(640, 480);
  v1 = new PVector(120, 60);
  v2 = new PVector(40, 200); 
}

void draw() {
  line(0, 0, v1.x, v1.y);
  line(0, 0, v2.x, v2.y);
}