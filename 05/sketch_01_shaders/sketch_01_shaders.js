let myShader;
let shaderEnabled = true;

function preload() {
  // load the shader definitions from files
  myShader = loadShader("gouraud.vert", "gouraud.frag");
}

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  if (shaderEnabled) {
    shader(myShader);
  }

  noStroke();  //<>//
  background(0);
  let dirY = (mouseY / float(height) - 0.5) * 2;
  let dirX = (mouseX / float(width) - 0.5) * 2;
  directionalLight(255, 255, 20, -dirX, -dirY, -1);
  sphere(120);
}

function mouseClicked() {
  shaderEnabled = !shaderEnabled;
}
