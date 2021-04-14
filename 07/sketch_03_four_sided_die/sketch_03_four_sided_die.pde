PImage textureImage;
float pos = 100;

float rotx = PI/4;
float roty = PI/4;

void setup() {
  size(640, 360, P3D);
  textureImage = loadImage("texture.jpg");
  textureMode(IMAGE);
  fill(255);
  stroke(color(44,48,32));
}

void draw() {
  background(0);
  translate(width/2.0, height/2.0) ;
  rotateX(rotx);
  rotateY(roty);
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

void mouseDragged() {
  float rate = 0.01;
  rotx += (pmouseY-mouseY) * rate;
  roty += (mouseX-pmouseX) * rate;
}
