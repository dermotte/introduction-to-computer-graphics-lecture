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
  ellipse(320+c2mouse.x*scalar, 240+c2mouse.y*scalar, 10, 10);
  line (320, 240, 320+c2mouse.x*scalar, 240+c2mouse.y*scalar);
  // line (320, 240, 320+c2mouse.x, 240+c2mouse.y);

}
