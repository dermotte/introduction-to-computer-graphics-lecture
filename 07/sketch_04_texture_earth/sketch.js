let img;
let rotY=0;

function setup() {
  createCanvas(640, 480, WEBGL);
  img = loadImage('nasa_earth_land_shallow_topo_2048.jpg');
  noStroke();
}

function draw() {
  background(220);
  texture(img)
  rotateY((rotY++/250));
  sphere(150)
}