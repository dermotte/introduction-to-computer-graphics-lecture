function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(64);
  // ambientLight(255, 255, 255);
  // directionalLight(255, 255, 255, 0, -1, 0);
  pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 200);
  noStroke()
  sphere(100);
  translate(150, 0, 0);
  sphere(20);
  translate(-350, 0, 0);
  box(50);
}
