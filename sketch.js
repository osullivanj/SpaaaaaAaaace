var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;
var pluto;

function preload () {
  mercury = loadImage("mercury.jpg");
  venus = loadImage("venus.jpg");
  earth = loadImage("earth.jpg");
  mars = loadImage("mars.jpg");
  jupiter = loadImage("jupiter.jpg");
  saturn = loadImage("saturn.jpg");
  uranus = loadImage("uranus.jpg");
  neptune = loadImage("neptune.jpg");
  pluto = loadImage("pluto.jpg");
}

function setup () {
  createCanvas (innerWidth, innerHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  noStroke();
  background(220);
  // background(0);
  push();
  rotateY(frameCount / 2);
  translate(0, 0, 0);

  // Sun
  fill("yellow");
  sphere(25);

  // Mercury
  push();
  rotateY(frameCount / 2);
  translate(40, 0, 0);
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill(102, 0, 204);
  texture(mercury);
  sphere(10);
  translate(15, 0, 0);
  fill(102, 0, 204);
  sphere(2);
  pop();

  // Venus
  push();
  rotateY(frameCount / 4);
  translate(33, 0, 0);
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill(255, 153, 51);
  texture(venus);
  sphere(3);
  translate(22, 0, 0);
  fill(255, 153, 51);
  sphere(2);
  pop();

  // Earth
  translate(35, 0, 0);
  push();
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill("blue");
  texture(earth);
  sphere(5);
  translate(18, 0, 0);
  fill("blue");
  sphere(2);
  pop();

  // Mars
  translate(40, 0, 0);
  push();
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill("red");
  texture(mars);
  sphere(7);
  translate(20, 0, 0);
  fill("red");
  sphere(3)
  pop();

  // Jupiter
  translate(43, 0, 0);
  push();
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill(51, 25, 0);
  texture(jupiter);
  sphere(7);
  translate(22, 0, 0);
  fill(51, 25, 0);
  sphere(3)
  pop();

  // Saturn
  translate(45, 0, 0);
  push();
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill(153, 153, 0);
  texture(saturn);
  sphere(10);
  translate(23, 0, 0);
  fill(153, 153, 0);
  sphere(5);
  pop();

  // Uranus
  translate(50, 0, 0);
  push();
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill(0, 255, 255);
  texture(uranus);
  sphere(12);
  translate(25, 0, 0);
  fill(0, 255, 255);
  sphere(6);
  pop();

  // Neptune
  translate(55, 0, 0);
  push();
  rotateY(frameCount * 4);
  // rotateX(frameCount * 6);
  fill(102, 102, 255);
  texture(neptune);
  sphere(12);
  translate(28, 0, 0);
  fill(102, 102, 255);
  sphere(6);
  pop();

  // Pluto
  translate(100, 0, 0);
  push();
  rotateY(frameCount * 4);
  // rotateX(frameCount * 4);
  fill(160, 160, 160);
  texture(pluto);
  sphere(4);
  translate(28, 0, 0);
  fill(160, 160, 160);
  sphere(2);
  pop();
}
