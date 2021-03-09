PVector lookTarget, spritePosition, spriteViews;

void setup() {
   size(640, 480);
   lookTarget = new PVector(10, 10, 0);
   spritePosition = new PVector(320, 240, 0);
   spriteViews = new PVector(0, 100, 0);
}

void draw() {
   background(0);
   stroke(255);
   PVector lookTo = PVector.sub(lookTarget, spritePosition);
   if (PVector.angleBetween(lookTo, spriteViews) > radians(5)) {
       spriteViews.rotate(radians(5));
   }
   ellipse(lookTarget.x, lookTarget.y, 12, 12);
   line(spritePosition.x, spritePosition.y, 
spritePosition.x+spriteViews.x, 
spritePosition.y+spriteViews.y);
}


void mouseReleased() {
   lookTarget.x = mouseX;
   lookTarget.y = mouseY;
}