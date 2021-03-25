let lighting = 0;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(64);
  if (lighting === 0)
    ambientLight(120, 120, 120);
  else if (lighting == 1)
    directionalLight(255, 255, 255, 0, -1, -1);
  else
    pointLight(255, 255, 255, 10, 10, 200);
  noStroke()
  sphere(100);
  translate(150, 0, 0);
  sphere(20);
  translate(-350, 0, 0);
  box(50);
}

function mouseReleased() {
  lighting = (lighting +1) % 3;
}
