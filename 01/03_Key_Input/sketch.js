let animation = false;
let animationSize = 1;

function setup() {
  createCanvas(400, 400);
  fill("#AEC8FF");
  textSize(animationSize);
}

function draw() {
  background(32);
  if (animation) {
    text(key, 200, 200);
    // easing it out
    textSize(Math.pow(animationSize, 3)*150);
    animationSize-=0.01
    // stopping animation if 0 is reached
    if (animationSize <= 0) {
      animation = false;
    }
  }
}

// animation on key release
function keyReleased() {
  animationSize = 1;
  animation = true;
  return false;
}
