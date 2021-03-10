/**
* Note that you have to run this file on a web server, otherwise the model won't load.
* see https://github.com/processing/p5.js/wiki/Local-server
* and https://p5js.org/get-started/
*/
let t;

function preload() {
  t = loadModel('torus.obj');
}

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(200);
  scale(50);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(t);
}
