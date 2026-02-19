let myLines = [];
let d1 = {x: 2, y:1};
let d2 = {x: 1, y:-2};

// run once at the beginning
function setup() {
  // set a 4:3 canvas
  createCanvas(640, 480);
  // create a list of random points
  myLines.push({
      x1: Math.random() * 640,
      y1: Math.random() * 480,
      x2: Math.random() * 640,
      y2: Math.random() * 480,
  });
  // setting what the points should look like
  stroke(255);
  strokeWeight(1);
}

// run every frame
function draw() {
  background(0);
  // draw the lines
  let myStroke = 255;
  for (let l of myLines) {
    stroke(myStroke--)
    line(l.x1, l.y1, l.x2, l.y2);
  }
  // check for collision
  let l = myLines[0]
  if (l.x1 + d1.x > 640 || l.x1 + d1.x < 0) 
    d1.x = -d1.x
  if (l.x2 + d2.x > 640 || l.x2 + d2.x < 0) 
    d2.x = -d2.x
  if (l.y1 + d1.y > 480 || l.y1 + d1.y < 0) 
    d1.y = -d1.y
  if (l.y2 + d2.y > 480 || l.y2 + d2.y < 0) 
    d2.y = -d2.y
  // add a moved first line
  let newLine = {
      x1: l.x1 + d1.x,
      y1: l.y1 + d1.y,
      x2: l.x2 + d2.x,
      y2: l.y2 + d2.y
  }
  myLines.unshift(newLine);
  // remove last line if maximum reached
  if (myLines.length > 250) myLines.pop();
}


