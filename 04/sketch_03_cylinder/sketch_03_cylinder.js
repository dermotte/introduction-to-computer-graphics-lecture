let segments = 12;
let len = 200;
let radius = 50;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(196);

  rotateY(radians(mouseX));

  // beginShape(QUADS); wouldn't work

  for (let i = 0; i < segments; i++) {
    beginShape();
    vertex(-len/2, radius * cos(i*2*Math.PI/segments), radius * sin(i*2*Math.PI/segments));
    vertex(-len/2, radius * cos((i+1)*2*Math.PI/segments), radius * sin((i+1)*2*Math.PI/segments));
    vertex(len/2, radius * cos((i+1)*2*Math.PI/segments), radius * sin((i+1)*2*Math.PI/segments));
    vertex(len/2, radius * cos(i*2*Math.PI/segments), radius * sin(i*2*Math.PI/segments));
    endShape(CLOSE);
  }
}
