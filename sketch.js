/* globals loadImage createCanvas innerWidth innerHeight WEBGL angleMode DEGREES noStroke background push rotateY frameCount translate fill texture sphere pop */

var markImage;
// var sunImage;
var sun;
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
  markImage = loadImage("mark.png");
  // sunImage = loadImage("sun.jpg");
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
  createCanvas(innerWidth, innerHeight, WEBGL);
  imageMode(CENTER);
  angleMode(DEGREES);

  // adjust the sun's texture position here
  sun = createGraphics(256, 256);
  sun.image(markImage, 20, 70, 80, 80);
}

function drawPlanet (orbitSpeed, orbitDistance, planetTexture, planetSize, moonDistance, moonColor, moonSize, rotationSpeed) {
  push();
  rotateY(frameCount * orbitSpeed);
  translate(orbitDistance, 0, 0);
  rotateY(frameCount * rotationSpeed);
  texture(planetTexture);
  sphere(planetSize);
  translate(moonDistance, 0, 0);
  fill(moonColor);
  sphere(moonSize);
  pop();
}

function draw() {
  noStroke();
  background(0);
  translate(0, 0, 0);

  // Sun
  texture(sun);
  rotateY(-90);
  sphere(25);

  // Mercury
  drawPlanet(2, 40, mercury, 2, 15, [102, 0, 204], 1, 1);

  // Venus
  drawPlanet(4, 33, venus, 3, 22, [255, 153, 51], 2, 1);

  // Earth
  drawPlanet(1, 35, earth, 5, 18, "blue", 2, 10);

  // Mars
  drawPlanet(6, 40, mars, 7, 20, "red", 3, 1);

  // Jupiter
  drawPlanet(1, 143, jupiter, 7, 22, [51, 25, 0], 3, 5);

  // Saturn
  drawPlanet(0.8, 145, saturn, 10, 23, [153, 153, 0], 5, 2);

  // Uranus
  drawPlanet(0.6, 150, uranus, 12, 25, [0, 255, 255], 6, 1.5);

  // Neptune
  drawPlanet(0.5, 160, neptune, 12, 28, [102, 102, 255], 6, 2);

  // Pluto
  drawPlanet(10, 180, pluto, 4, 28, [160, 160, 160], 2);
}