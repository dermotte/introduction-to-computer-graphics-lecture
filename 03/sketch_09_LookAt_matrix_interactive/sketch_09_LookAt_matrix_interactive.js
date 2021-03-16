let eyeZ = 0;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  // camera(eyeX, eyeY, eyeZ,
  //     centerX, centerY, centerZ,
  //     upX, upY, upZ);
  camera(mouseX, mouseY,  eyeZ,
      320, 240, 0,
      0, 1, 0);
  translate(320, 240);
  box(120);
}

function mouseWheel(event) {
  eyeZ += event.delta;
}
