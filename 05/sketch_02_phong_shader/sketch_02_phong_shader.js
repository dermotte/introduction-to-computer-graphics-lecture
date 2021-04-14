let myShader;
let shaderEnabled = true;

function preload() {
  // load the shader definitions from files
  myShader = loadShader("data/phong.vert", "data/phong.frag");
}

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  if (shaderEnabled == true) {
    shader(myShader);
  }

  noStroke();
  background(0);
  camera(0,0,500);
  let dirY = (mouseY / float(height) - 0.5) * 2;
  let dirX = (mouseX / float(width) - 0.5) * 2;
  // directionalLight(255, 255, 20, -dirX, -dirY, -1);
  pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 350);
  sphere(120);
}

function mouseClicked() {
  shaderEnabled = !shaderEnabled;
}
