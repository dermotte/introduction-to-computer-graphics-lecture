void setup() {
  size(640, 480, P3D);
  noLoop();
}

void draw() {
  noFill();
  background(255);
  // camera(eyeX, eyeY, eyeZ, 
  //     centerX, centerY, centerZ, 
  //     upX, upY, upZ);
  camera(320, 240, 200, 
      320, 240, 0,
      0, 1, 0);
  translate(320, 240);
  box(120);
  PVector up = new PVector(0, 1, 0);
  PVector eye = new PVector(320, 240, 200);
  PVector target = new PVector(320, 240, 0);
  PVector f = PVector.sub(target, eye).normalize();
  PVector l = up.cross(f).normalize();
  PVector u = f.cross(l);
  PVector t = new PVector();
  t.x = -l.dot(eye);
  t.y = -u.dot(eye);
  t.z = -f.dot(eye);
  print("F = " + f + "\n");
  print("L = " + l + "\n");
  print("U = " + u + "\n");
  print("T = " + t + "\n");
  // printProjection();
}
