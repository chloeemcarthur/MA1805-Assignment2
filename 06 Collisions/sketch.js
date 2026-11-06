let x = 0;
let y = 200;
let size = 30; 
let speed = 2;
let score = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Move the circle
  fill(255,0,0);
  circle(x, y, size);
  x = x % width;
  x+=speed;

  // The score
  fill(0);
  textSize(20);
  text(score, 30, 30);
}

function mouseClicked(){
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= size/2){
    score++;
  }
}