let v1, v2;

function setup() {
  v1 = createVector(10, 20, 2);
  v2 = createVector(60, 80, 6);
  let v3 = v1.cross(v2);
  print(v3);  // Prints "[ -40.0, 60.0, -400.0 ]"
}
