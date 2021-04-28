let p = 150;
let textureImage;

function setup() {
  createCanvas(640, 480, WEBGL);
  textureImage = loadImage("mountain.jpg");
  textureMode(IMAGE);
}

function draw() {
  background(128);

  rotateX(-radians(mouseY));
  rotateY(radians(mouseX));

  texture(textureImage);
  // with triangles instead of quads
  beginShape(TRIANGLES);
  vertex(-p, -p,  50, 0, 0);
  vertex( -p, p,  50, 0, 640);
  vertex( 0, p,  0, 320, 640);

  vertex(-p, -p,  50, 0, 0);
  vertex( 0, p,  0, 320, 640);
  vertex( 0, -p,  0, 320, 0);

  vertex(0, -p,  0, 320, 0);
  vertex( 0, p,  0, 320, 640);
  vertex( p, p,  50, 640, 640);

  vertex(0, -p,  0, 320, 0);
  vertex( p, p,  50, 640, 640);
  vertex( p, -p,  50, 640, 0);
  endShape();
}
