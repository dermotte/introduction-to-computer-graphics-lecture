/**
 * Sketch: Key Input Animation
 * 
 * This sketch demonstrates a simple animation that triggers on key release.
 * The animation draws the last pressed key at the center of the canvas and
 * gradually decreases the text size until it stops.
 */

 /**
 * Whether the animation is currently running.
 * @type {boolean}
 */
let animation = false;
/**
 * The size of the text in the animation.
 * @type {number}
 */
let animationSize = 1;

/**
 * The setup function that initializes the canvas and drawing settings.
 */
function setup() {
  createCanvas(400, 400);
  fill("#AEC8FF");
  textSize(animationSize);
}

/**
 * The draw function that handles the animation logic.
 * It draws the last pressed key and animates the text size.
 */
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

/**
 * The keyReleased function that triggers the animation.
 * When a key is released, the animation starts and the text size is reset.
 */
function keyReleased() {
  animationSize = 1;
  animation = true;
  return false;
}