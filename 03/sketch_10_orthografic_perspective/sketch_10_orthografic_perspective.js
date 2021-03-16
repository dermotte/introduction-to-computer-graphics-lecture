let isOrtho = false;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  if (isOrtho)
    ortho();
  else
    perspective();
  camera(mouseX, mouseY,  200, // eye
      320, 240, 0, // target
      0, 1, 0); // up
  translate(320, 240);
  box(120);
}

function mouseReleased() {
  isOrtho = !isOrtho;
}
