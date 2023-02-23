// from https://en.wikipedia.org/wiki/Rose_%28mathematics%29
let k = 4;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  stroke(255);
}

function draw() {
  background(0);
  noFill();
  beginShape();
  translate(width/2, height/2);
  for (let i=0; i<360; i++) {
    let r = 150*sin(k*i);
    let x = r * sin(i)
    let y = r * cos(i);
    vertex (x,y);
  }
  endShape(CLOSE);
}

function keyReleased() {
  if (key==='+') k++;
  if (key==='-') k--;
}