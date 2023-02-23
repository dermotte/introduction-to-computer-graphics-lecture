let offset, c2mouse;

function setup() {
  offset = createVector(0, -25);
  c2mouse = createVector();
  createCanvas(640, 480);
}

function draw() {
  background("#000000");
  stroke("#FFFFFF");
  // set the vector:
  c2mouse.x = mouseX-320;
  c2mouse.y = mouseY-240;
  // normalize:
  let vLength = sqrt(c2mouse.x*c2mouse.x + c2mouse.y*c2mouse.y);
  c2mouse.x = c2mouse.x/vLength;
  c2mouse.y = c2mouse.y/vLength;
  // set the label:
  text("Vector center 2 mouse is <"+c2mouse.x+", "+c2mouse.y+">",
    mouseX + offset.x, mouseY+ offset.y);

  // paint the vector
  let scalar = 50;
  paintArrow(createVector(320, 240), p5.Vector.mult(c2mouse, scalar))
}

// draw an arrow for a vector at a given base position
function paintArrow(base, vec) {
  push();
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}