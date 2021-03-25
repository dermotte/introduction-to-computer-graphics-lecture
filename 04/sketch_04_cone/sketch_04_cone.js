let segments = 12;
let len = 200;
let radius = 50;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(196);
  rotateY(radians(mouseX));
  translate(len/2, 0, 0);
  beginShape(TRIANGLES);
  for (let i = 0; i < segments; i++) {
    vertex(-len, 0, 0); // tip of the cone
    vertex(0, radius * cos((i)*2*PI/segments), radius * sin((i)*2*PI/segments));
    vertex(0, radius * cos((i+1)*2*PI/segments), radius * sin((i+1)*2*PI/segments));
  }
  endShape();
}
