let pos = {x: 200, y: 200};
    
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(32);
  // move towards mouse
  let dx = pos.x - mouseX;
  let dy = pos.y - mouseY;
  pos.x -= dx/4;
  pos.y -= dy/4;
  // draw
  fill(255)
  circle(pos.x, pos.y, 35)
  fill(0)
  circle(pos.x, pos.y, 15)
}