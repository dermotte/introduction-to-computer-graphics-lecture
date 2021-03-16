let fov;
let rows = 32;

function setup() {
  fov = PI/3.0;
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  let cameraZ = ((height/2.0) / tan(PI*60.0/360.0));
  perspective(fov, width/height, cameraZ/10.0, cameraZ*10.0);

  translate(0-rows/2*20, mouseY, 0);
  for (let x = 0; x < rows; x++) {
    translate(0, 0, -20);
    for (let y = 0; y < rows; y++) {
      translate(20, 0, 0);
      rotateY(radians(mouseX));
      box(5);
      rotateY(radians(-mouseX));
    }
    translate(-20*rows, 0);
  }

}

function mouseWheel(event) {
  fov += event.delta*PI/32;
}
