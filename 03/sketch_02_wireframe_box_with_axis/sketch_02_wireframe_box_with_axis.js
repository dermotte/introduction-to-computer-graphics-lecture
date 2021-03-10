function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  // translate(320, 240);
  rotateY(radians(mouseX));
  rotateZ(radians(mouseX));
  stroke("#00FF00");
  line(0, 0, 0, 200, 0, 0);
  stroke("#0000FF");
  line(0, 0, 0, 0, 200, 0);
  stroke("#FF0000");
  line(0, 0, 0, 0, 0, 200);
  stroke(0);
  box(120);
}
