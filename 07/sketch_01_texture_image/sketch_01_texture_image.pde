PImage textureImage;
float pos = 150;

void setup() {
  size(640, 360, P3D);
  textureImage = loadImage("mountain.jpg");
  textureMode(IMAGE);
  fill(255);
  stroke(color(44,48,32));
}

void draw() {
  background(0);
  translate(width/2.0, height/2.0) ;
  rotateZ(radians(mouseY));
  rotateY(-radians(mouseX));
  beginShape(QUADS);
  texture(textureImage);
  
  vertex(-pos, -pos,  0, 0, 0);
  vertex( pos, -pos,  0, 640, 0);
  vertex( pos,  pos,  0, 640, 640);
  vertex(-pos,  pos,  0, 0, 640);
  
  endShape();
}
