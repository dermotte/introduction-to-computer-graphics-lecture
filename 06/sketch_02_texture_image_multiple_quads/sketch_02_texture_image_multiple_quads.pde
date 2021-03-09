PImage textureImage;
float pos = 100;

float rotx = PI/4;
float roty = PI/4;

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
  rotateX(rotx);
  rotateY(roty);
  beginShape(QUADS);
  texture(textureImage);
  
  vertex( -2*pos, -pos,  pos, 0, 0);
  vertex( -pos,  -pos,  0, 160, 0);
  vertex( -pos,  pos,  0, 160, 640);
  vertex( -2*pos,  pos,  pos, 0, 640);
  
  vertex(-pos, -pos,  0, 160, 0);
  vertex( pos, -pos,  0, 480, 0);
  vertex( pos,  pos,  0, 480, 640);
  vertex(-pos,  pos,  0, 160, 640);
  
  vertex( pos, -pos,  0, 480, 0);
  vertex( pos*2,  -pos,  pos, 640, 0);
  vertex( pos*2,  pos,  pos, 640, 640);
  vertex( pos,  pos,  0, 480, 640);
  
  endShape();
}

void mouseDragged() {
  float rate = 0.01;
  rotx += (pmouseY-mouseY) * rate;
  roty += (mouseX-pmouseX) * rate;
}
