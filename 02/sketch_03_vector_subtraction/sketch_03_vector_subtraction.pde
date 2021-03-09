PVector v1, v2, v3;

void setup() {
  size(640, 480);
  v1 = new PVector(200, 200);
  v2 = new PVector(40, 80); 
  v3 = new PVector();

  // subtraction of v1 - v2
  v3.x = v1.x - v2.x;
  v3.y = v1.y - v2.y;
  
  // in-built method works like this:
  // v3 = PVector.add(v1,v2);
  
  // just for visualization:
  strokeWeight(2);
}

void draw() {
  background(0);
  // v1 in draw()
  stroke(#FFFFFF);
  line(0, 0, v1.x, v1.y);
  ellipse(v1.x, v1.y, 7, 7);
  // v2 in draw()
  stroke(#7777FF);
  line(0, 0, v2.x, v2.y);
  ellipse(v2.x, v2.y, 7, 7);
  // v3 in draw()
  stroke(#77FF77);
  line(0, 0, v3.x, v3.y);
  ellipse(v3.x, v3.y, 7, 7);

}