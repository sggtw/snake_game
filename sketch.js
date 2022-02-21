

let s;
let scl = 25;
let food;
let backgroundImg;
function setup() {
  createCanvas(800, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
  ellipseMode(CENTER);
  rectMode(CENTER);
  noStroke();
  backgroundImg = loadImage('369182.jpg');
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(backgroundImg);
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(random(255), random(255), random(255));
  ellipse(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
