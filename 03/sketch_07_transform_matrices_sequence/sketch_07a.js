function setup() {
    createCanvas(640, 480, WEBGL);
    angleMode(DEGREES);
  }
  
  function draw() {
    noFill();
    background(255);
    for (let x = 50; x < 630; x+=40) {
      push();
      rotateY(x/10);
      rotateZ(x/10);
      translate(-width/2 + x, 0, 0);
      stroke(0);
      box(30);
      pop();
    }
  }
  