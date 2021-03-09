PVector offset, c2mouse;

void setup() {
  offset = new PVector(0, -25);
  c2mouse = new PVector(); 
  size(640, 480);
}

void draw() {
  background(#000000);
  stroke(#FFFFFF);
  // set the vector:
  c2mouse.x = mouseX-320;
  c2mouse.y = mouseY-240;
  // normalize:
  float vLength = sqrt(c2mouse.x*c2mouse.x 
      + c2mouse.y*c2mouse.y);
  c2mouse.x = c2mouse.x/vLength;
  c2mouse.y = c2mouse.y/vLength;
  // set the label:
  text("Vector center 2 mouse is <"+c2mouse.x+", "+c2mouse.y+">", 
    mouseX + offset.x, mouseY+ offset.y);

  // paint the vector
  float scalar = 50;
  ellipse(320+c2mouse.x*scalar, 240+c2mouse.y*scalar, 10, 10);
  line (320, 240, 320+c2mouse.x*scalar, 240+c2mouse.y*scalar);
  // line (320, 240, 320+c2mouse.x, 240+c2mouse.y);
  
}