void setup() {
  size(640, 480, P3D);
}

void draw() {
  noFill();
  background(255);
  // translate(320, 240);
  // NOTE: it's a column major system (OpenGL) 
  // in Processing
  applyMatrix(  1.0, 0.0, 0.0, 320,
                0.0, 1.0, 0.0, 240,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0);  
  stroke(0);
  box(120);
}
