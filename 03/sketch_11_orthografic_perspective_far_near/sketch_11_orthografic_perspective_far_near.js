let isOrtho = false;
let rows = 32;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  if (isOrtho) // with the far plane connected to the mouse ..
    ortho(-width/2, width/2, -height/2, height/2, mouseY, 1000);

  else perspective();
  camera(320, 120,  200, // eye
      320, 240, 0, // target
      0, 1, 0); // up

  translate(320-rows/2*20, 240, -600);
  for (let x = 0; x < rows; x++) {
    translate(0, 0, 20);
    for (let y = 0; y < rows; y++) {
      translate(20, 0);
      rotateY(radians(mouseX));
      box(5);
      rotateY(radians(-mouseX));
    }
    translate(-20*rows, 0);
  }
}

function mouseReleased() {
  isOrtho = !isOrtho;
}
