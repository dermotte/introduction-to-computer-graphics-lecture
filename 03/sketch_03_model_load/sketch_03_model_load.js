let t;

function preload() {
  t = loadModel('torus.obj');
}

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(200);
  scale(50);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(t);
}
