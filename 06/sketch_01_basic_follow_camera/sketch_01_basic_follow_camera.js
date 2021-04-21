let boxX = 0, boxZ = 0;
let streetLength = 60, streetWidth = 80;
let left = false, right = false,
  forward = false, back = false;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(128);
  // avatar movement
  if (back) boxZ -= 1.0;
  if (forward) boxZ += 1.0;
  if (left) boxX -= 1.0;
  if (right) boxX += 1.0;
  // street
  makeStreet();
  // follow camera
  camera(boxX, -60, boxZ+120, // eye
    boxX, 0, boxZ,     // lookAt
    0, 1, 0);    // camera up vector
  // avatar
  fill("#E87E0C");
  translate(boxX, 0, boxZ);
  sphere(10);
}

// makes a curving road
function makeStreet() {
  fill("#8B0CE8");
  for (let i = 0; i < streetLength; i++) {
    let offset = sin(i/3)*30;
    translate(-streetWidth/2 + offset, 0, 0);
    box(10);
    translate(streetWidth, 0, 0);
    box(10);
    translate(-streetWidth/2-offset, 0, -40);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      back = true;
    }
    if (keyCode === DOWN_ARROW) {
      forward = true;
    }
    if (keyCode === LEFT_ARROW) {
      left = true;
    }
    if (keyCode === RIGHT_ARROW) {
      right = true;
    }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
      back = false;
    }
    if (keyCode === DOWN_ARROW) {
      forward = false;
    }
    if (keyCode === LEFT_ARROW) {
      left = false;
    }
    if (keyCode === RIGHT_ARROW) {
      right = false;
    }
}
