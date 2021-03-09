PVector v1, v2;

void setup() {
  size(640, 480);
  v1 = new PVector(120, 60);
  v2 = new PVector(40, 200); 
  // noLoop();
}

void draw() {
  background(0);
  stroke(255);
  // integrate mouse position into general plan
  v1.x = mouseX;
  v1.y = mouseY;
  // draw:
  line(0, 0, v1.x, v1.y);
  line(0, 0, v2.x, v2.y);
  // compute dot product:
  float product = v1.x*v2.x + v1.y*v2.y;
  // print(product);
  text("dot product is "+product, 200, 200);
}