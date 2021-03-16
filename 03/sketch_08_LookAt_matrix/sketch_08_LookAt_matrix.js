function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
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
  let up = createVector(0, 1, 0);
  let eye = createVector(320, 240, 200);
  let target = createVector(320, 240, 0);
  let f = p5.Vector.sub(target, eye).normalize();
  let l = up.cross(f).normalize();
  let u = f.cross(l);
  let t = createVector();
  t.x = -l.dot(eye);
  t.y = -u.dot(eye);
  t.z = -f.dot(eye);
  print("F = " + f + "\n");
  print("L = " + l + "\n");
  print("U = " + u + "\n");
  print("T = " + t + "\n");
  // printProjection();
}
