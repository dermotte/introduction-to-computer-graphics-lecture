let lookTarget, spritePosition, spriteViews;

function setup() {
  createCanvas(640, 480);
  lookTarget = createVector(10, 10, 0);
  spritePosition = createVector(320, 240, 0);
  spriteViews = createVector(0, 100, 0);
}

function draw() {
  background(0);
  stroke(255);
  let lookTo = p5.Vector.sub(lookTarget, spritePosition);

  if (abs(lookTo.angleBetween(spriteViews)) > radians(5)) {
    if (lookTo.cross(spriteViews).z > 0)
      spriteViews.rotate(radians(-5));
    else
      spriteViews.rotate(radians(5));
  }
  ellipse(lookTarget.x, lookTarget.y, 12, 12);
  line(spritePosition.x, spritePosition.y,
    spritePosition.x + spriteViews.x,
    spritePosition.y + spriteViews.y);
}


function mouseReleased() {
  lookTarget.x = mouseX;
  lookTarget.y = mouseY;
}
