let v1, v2;

function setup() {
  createCanvas(640, 480);
  v1 = createVector(120, 60);
  v2 = createVector(40, 200);
  // noLoop();
}

function draw() {
  background(0);
  stroke(255);
  // integrate mouse position into general plan
  v1.x = mouseX;
  v1.y = mouseY;
  // draw:
  line(0, 0, v1.x, v1.y);
  line(0, 0, v2.x, v2.y);
  // compute dot product:
  let product = v1.x*v2.x + v1.y*v2.y;
  // print(product);
  text("dot product is "+product, 200, 200);
}
