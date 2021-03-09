// enemies
let e_a = [],
  e_b = [],
  e_p = [];
let e_f = [],
  e_m = [];
let num_enemies = 5;
// player
let a, b, pos;
let f = 0;
let clicks = 0;

function setup() {
  createCanvas(640, 480);
  // init the enemies
  for (let i = 0; i < num_enemies; i++) { // for each enemy
    // random route:
    e_a[i] = createVector(random(20, 620), random(20, 460));
    e_b[i] = createVector(random(20, 620), random(20, 460));
    // random start and movement speed:
    e_f[i] = random(0, 1);
    e_m[i] = random(0.005, 0.025);
  }
  // init the player
  a = createVector(10, 10);
  b = createVector(10, 10);
}

function draw() {
  background(0);
  //
  // move and paint the enemy:
  stroke("#FF0000");
  fill("#FF0000");
  for (let i = 0; i < num_enemies; i++) {
    e_p[i] = p5.Vector.add(p5.Vector.mult(e_a[i], 1 - ease(e_f[i])), p5.Vector.mult(e_b[i], ease(e_f[i])));
    ellipse(e_p[i].x, e_p[i].y, 25, 25);
    // move per frame:
    e_f[i] = e_f[i] + e_m[i];
    // turn around after reaching end point:
    if (e_f[i] >= 1 || e_f[i] <= 0)
      e_m[i] = -e_m[i];
  }
  // saveFrame("line-######.png");
}

function ease(f) {
  // return f*f; // smooth start
  // return 1-(1-f)*(1-f); // smooth stop
  return (1 - f) * (f * f * f) + (f) * (1 - (1 - f) * (1 - f) * (1 - f)); // blend both ...
}
