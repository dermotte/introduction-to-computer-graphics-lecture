let pos = 100;
let textureImage;

function setup() {
  createCanvas(640, 480, WEBGL);
  textureImage = loadImage("texture.jpg");
  textureMode(IMAGE);
}

function draw() {
  background(128);

  rotateX(-radians(mouseY));
  rotateY(radians(mouseX));

  texture(textureImage);

  beginShape(TRIANGLES);

  texture(textureImage);

  vertex(pos, pos, -pos, 0, 0);   // A
  vertex(-pos, -pos, -pos, 200, 200); // C
  vertex(-pos, pos, pos, 0, 200);   // F

  vertex(pos, pos, -pos, 0, 0);   // A
  vertex(-pos, -pos, -pos, 200, 200); // C
  vertex(pos, -pos, pos, 200, 0);   // H

  vertex(pos, pos, -pos, 200, 0);   // A
  vertex(-pos, pos, pos, 400, 0);   // F
  vertex(pos, -pos, pos, 200, 200);   // H

  vertex(-pos, -pos, -pos, 200, 200); // C
  vertex(-pos, pos, pos, 400, 200);   // F
  vertex(pos, -pos, pos, 400, 0);   // H

  endShape();
}
