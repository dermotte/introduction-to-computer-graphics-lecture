let pos = 150;
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

  beginShape(TRIANGLES);
  vertex(-pos, -pos,  0, 0, 0);
  vertex( pos, -pos,  0, 640, 0);
  vertex( pos,  pos,  0, 640, 640);
  vertex(-pos, -pos,  0, 0, 0);
  vertex( pos,  pos,  0, 640, 640);
  vertex(-pos,  pos,  0, 0, 640);
  endShape();
}
