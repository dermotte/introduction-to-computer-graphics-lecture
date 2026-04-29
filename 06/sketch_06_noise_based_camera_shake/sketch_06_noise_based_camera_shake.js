let objectList = []
let bbox = {}
let zPosition = 200
let cameraShake = true
let cameraOffset

async function setup() {
  createCanvas(400, 400, WEBGL);
  objectList = poissonDiscSampling(300, 8)
  bbox = getBoundingBox(objectList)
  cameraOffset = createVector(0, 0, 0)
  print(objectList)
}

function draw() {
  background(220);
  noStroke()
  directionalLight(240, 220, 240, -1, -1, -2)
  ambientLight(10, 60, 10)

  objectList.forEach(drawObject)
  // Perlin noise controlled camera shake
  let amount = 2      // try 2, 10, 20
  let speed = 0.005   // try 0.005, 0.01, 0.05
  cameraOffset.x = amount * noise(speed * frameCount);
  cameraOffset.y = amount * noise(speed * frameCount + 10000);
  camera(0 + cameraOffset.x, -40 + cameraOffset.y, zPosition + cameraOffset.z,  // cam position
           cameraOffset.x, cameraOffset.y, cameraOffset.z) // look at point
}


function drawObject(obj) {
    translate(obj.x-bbox.maxX/2, 0, obj.y-bbox.maxY/2)
    box(2)
    translate(-obj.x+bbox.maxX/2, 0, -obj.y+bbox.maxY/2)
}

function keyPressed() {
  if (key === 's') {
    zPosition++
  }
  
  if (key === 'w') {
    zPosition--
  }
  

  if (keyCode === 13) { // Enter key
    cameraShake = !cameraShake
  }
}


function getBoundingBox(points) {
  if (points.length === 0) return null;

  // Initialize with extreme values
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;

  for (let p of points) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }

  return {
    minX: minX,
    maxX: maxX,
    minY: minY,
    maxY: maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}

function poissonDiscSampling(numPoints, r) {
  let points = [];
  let activeList = [];

  // 1. Place an initial starting point at a random location
  let firstPoint = createVector(0, 0);
  points.push(firstPoint);
  activeList.push(firstPoint);

  while (activeList.length > 0 && points.length < numPoints) {
    // Pick a random point from the active list to act as a center
    let index = Math.floor(random(activeList.length));
    let center = activeList[index];
    let found = false;

    // Try up to 30 attempts to place a new point around this center
    for (let i = 0; i < 30; i++) {
      // Generate a candidate in the interval [r, 2r]
      let angle = random(-PI, PI);
      let distance = random(r, 2 * r);
      let candidate = createVector(
        center.x + cos(angle) * distance,
        center.y + sin(angle) * distance
      );

      // Check if the candidate is within canvas bounds
      if (candidate.x >= 0 && candidate.x < width && candidate.y >= 0 && candidate.y < height) {
        
        // Check if the candidate is at least r away from all existing points
        let tooClose = false;
        for (let p of points) {
          if (dist(candidate.x, candidate.y, p.x, p.y) < r) {
            tooClose = true;
            break;
          }
        }

        if (!tooClose) {
          points.push(candidate);
          activeList.push(candidate);
          found = true;
          // Stop if we have reached the requested number of points
          if (points.length >= numPoints) break; 
          break; // Successfully placed a point, move to next attempt
        }
      }
    }

    // If no valid point was found after 30 attempts, remove center from active list
    if (!found) {
      activeList.splice(index, 1);
    }
  }

  return points;
}


