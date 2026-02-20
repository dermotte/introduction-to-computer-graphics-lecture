// from https://en.wikipedia.org/wiki/Rose_%28mathematics%29
let k = 4;
let font;

async function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  stroke(255);
  // load from Google Fonts (p5js v2.2.0):
  font = await loadFont('https://fonts.googleapis.com/css2?family=Betania+Patmos+In&family=Edu+SA+Hand:wght@400..700&family=Noto+Color+Emoji&display=swap');
  textFont(font)
}

function draw() {
  background(0);
  noFill();
  beginShape();
  translate(width / 2, height / 2);
  for (let i = 0; i < 360; i++) {
    let r = 150 * sin(k * i);
    let x = r * sin(i);
    let y = r * cos(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  text("+/- for more/less petals.", -190, 190)
}

function keyReleased() {
  if (key === "+") k++;
  if (key === "-") k--;
}
