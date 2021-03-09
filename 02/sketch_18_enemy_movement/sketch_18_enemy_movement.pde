// enemies
PVector[] e_a, e_b, e_p;
float[] e_f, e_m;
int num_enemies = 5;
// player
PVector a, b, pos;
float f = 0;
int clicks = 0;

void setup() {
  size(640, 480);
  // init the enemies
  e_a = new PVector[num_enemies];
  e_b = new PVector[num_enemies];
  e_p = new PVector[num_enemies];
  e_f = new float[num_enemies];
  e_m = new float[num_enemies];
  for (int i = 0; i< num_enemies; i++) { // for each enemy
    // random route:
    e_a[i] = new PVector(random(20, 620), random(20, 460));
    e_b[i] = new PVector(random(20, 620), random(20, 460));
    // random start and movement speed:
    e_f[i] = random(0, 1);
    e_m[i] = random(0.005, 0.025);
  }
  // init the player
  a = new PVector(10, 10);
  b = new PVector(10, 10);
}

void draw() {
  background(0);
  // 
  // move and paint the enemy:
  stroke(#FF0000);
  fill(#FF0000);
  for (int i = 0; i< num_enemies; i++) { 
    e_p[i] = PVector.add(PVector.mult(e_a[i], 1-ease(e_f[i])), PVector.mult(e_b[i], ease(e_f[i])));
    ellipse(e_p[i].x, e_p[i].y, 25, 25);
    // move per frame:
    e_f[i] = e_f[i] + e_m[i];
    // turn around after reaching end point:
    if (e_f[i] >= 1 || e_f[i] <=0)
      e_m[i] = -e_m[i];
  }
  // saveFrame("line-######.png");
}

float ease(float f) {
  // return f*f; // smooth start
  // return 1-(1-f)*(1-f); // smooth stop
  return (1-f)*(f*f*f) + (f)*(1-(1-f)*(1-f)*(1-f)); // blend both ...
}
