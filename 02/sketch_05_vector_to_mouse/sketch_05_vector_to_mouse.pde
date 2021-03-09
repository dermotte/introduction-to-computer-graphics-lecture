PVector offset;

void setup() {
  offset = new PVector(0, -25);
  size(640, 480);
}

void draw() {
  background(#000000);
  // paint the ball
  stroke(#FFFFFF);
  ellipse(mouseX, mouseY, 10, 10);
  line (0, 0, mouseX, mouseY);
  // paint the label
  text("here's the mouse", 
    mouseX + offset.x, mouseY+ offset.y);
}