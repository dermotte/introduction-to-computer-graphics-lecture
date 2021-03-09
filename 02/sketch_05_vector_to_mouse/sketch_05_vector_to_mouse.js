let offset;

function setup() {
  offset = createVector(0, -25);
  createCanvas(640, 480);
}

function draw() {
  background("#000000");
  // paint the ball
  stroke("#FFFFFF");
  ellipse(mouseX, mouseY, 10, 10);
  line (0, 0, mouseX, mouseY);
  // paint the label
  text("here's the mouse",
    mouseX + offset.x, mouseY+ offset.y);
}
