let boxX = 0, boxZ = 0, camX = 0, camZ = 0;
let streetLength = 60, streetWidth = 80;
let left = false, right = false, 
  forward = false, back = false;
let movement = 0.1;
// for the camera shake
let cameraShakeOn = false;
let cameraShakeProgress = 0.0;
let shakeX = []
let shakeY = []

function setup() {
  createCanvas(640, 480, WEBGL);
  rerollCameraShake();
}

function draw() {
  background(128);
  // avatar movement
  if (back) boxZ -= movement*deltaTime;
  if (forward) boxZ += movement*deltaTime;
  if (left) boxX -= movement*deltaTime;
  if (right) boxX += movement*deltaTime;

  // street
  makeStreet();
  // spring follow camera
  if (abs(camX - boxX) > 0.01) {
    camX += (-camX + boxX)/32.0; // change for different spring behavior
  } else {
      camX = boxX;
  }
  if (abs(camZ - boxZ+120) > 0.01) {
    camZ += (-camZ + boxZ +120)/32.0; // change for different spring behavior
  } else {
      camZ = boxZ+120;
  }
  let cameraShakeVector = cameraShake(deltaTime/250) // compute the position in the shakle function based on elapsed seconds
  camera(camX+cameraShakeVector.x/2, -60, camZ+cameraShakeVector.y/2, // eye 
    boxX+cameraShakeVector.x/2, 0, boxZ+cameraShakeVector.y/2,     // lookAt
    0, 1, 0);    // camera up vector
  // avatar
  fill("#E87E0C");
  translate(boxX, 0, boxZ);
  sphere(10);
}

function rerollCameraShake() {
  // re-roll the shake: 
  for (let i = 0; i< 120; i++) {
    // random numbers in [-1, 1]
    shakeX.push(Math.random()*2-1)
    shakeY.push(Math.random()*2-1)
  }
}

function cameraShake(dt) {
  if (cameraShakeOn) {
    cameraShakeProgress += dt;
    // check if animation is over and reset it if over:
    if (cameraShakeProgress >= 1.0) {
      cameraShakeOn = false
      cameraShakeProgress = 0.0;
      rerollCameraShake() 
      return createVector(0, 0);
    }
    pos = cameraShakeProgress;

    // get the number of segments
    let segments = Math.min(shakeX.length, shakeY.length)-1
    // identify the segment we are in 
    let currentSegment = Math.floor(pos*(segments));
    // linear interpolation
    let sx = lerp(shakeX[currentSegment], shakeX[currentSegment+1], pos*(segments)-currentSegment)
    let sy = lerp(shakeY[currentSegment], shakeY[currentSegment+1], pos*(segments)-currentSegment)
    // ease out
    sx = sx / pos
    sy = sy / pos
    return createVector(sx, sy);
  } else 
    return createVector(0, 0);
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
    if (keyCode === ENTER) {
      cameraShakeOn = true;
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