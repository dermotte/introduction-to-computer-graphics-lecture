let v1, v2;

function setup() {
  createCanvas(640, 480);
  v1 = createVector(120, 60);
  v2 = createVector(40, 200);
}

function draw() {
  line(0, 0, v1.x, v1.y);
  line(0, 0, v2.x, v2.y);
}
