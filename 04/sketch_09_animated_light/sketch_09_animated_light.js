let sun = -200;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(64);
  ambientLight(16, 12, 8);
  directionalLight(233, 189, 21, sun++/50, 1, -1);
  pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 200);
  noStroke()
  sphere(100);
  translate(150, 0, 0);
  sphere(20);
  translate(-350, 0, 0);
  box(50);

}
