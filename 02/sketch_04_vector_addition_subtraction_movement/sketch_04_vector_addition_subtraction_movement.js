let ball, move;

function setup() {
  createCanvas(640, 480);
  ball = createVector(0, 0);
  move = createVector(5, 2);
}

function draw() {
  background("#000000");

  // move the ball
  ball.add(move);
  // check the borders
  if (ball.x > 640 || ball.x < 0) move.x = -move.x;
  if (ball.y > 480 || ball.y < 0) move.y = -move.y;

  // paint the ball
  stroke("#FFFFFF");
  ellipse(ball.x, ball.y, 10, 10);
}
