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
  sun = loadImage("sun.jpg");
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
  angleMode(DEGREES);
}

function drawPlanet (orbitSpeed, orbitDistance, planetTexture, planetSize, moonDistance, moonColor, moonSize, rotationSpeed) {
  // Earth
  push();
  rotateY(frameCount * orbitSpeed);
  translate(orbitDistance, 0, 0);
  rotateY(frameCount * rotationSpeed);
  // rotateX(frameCount * 6);
  // fill("blue");
  texture(planetTexture);
  sphere(planetSize);
  translate(moonDistance, 0, 0);
  fill(moonColor);
  sphere(moonSize);
  pop();
}

function draw() {
  noStroke();
  // background(220);
  background(0);
  // push();
  // rotateY(frameCount / 2);
  translate(0, 0, 0);

  // Sun
  fill("yellow");
  texture(sun);
  sphere(25);

  // Mercury
  drawPlanet(2, 40, mercury, 2, 15, [102, 0, 204], 1, 1);
  // push();
  // rotateY(frameCount / 2);
  // translate(40, 0, 0);
  // rotateY(frameCount * 4);
  // // rotateX(frameCount * 6);
  // fill(102, 0, 204);
  // texture(mercury);
  // sphere(2);
  // translate(15, 0, 0);
  // fill(102, 0, 204);
  // sphere(1);
  // pop();

  // Venus
  drawPlanet(4, 33, venus, 3, 22, [255, 153, 51], 2, 1);
  // push();
  // rotateY(frameCount / 4);
  // translate(33, 0, 0);
  // rotateY(frameCount * 4);
  // // rotateX(frameCount * 6);
  // fill(255, 153, 51);
  // texture(venus);
  // sphere(3);
  // translate(22, 0, 0);
  // fill(255, 153, 51);
  // sphere(2);
  // pop();

  // Earth
  drawPlanet(1, 35, earth, 5, 18, "blue", 2, 10);
  // push();
  // rotateY(frameCount * 7);
  // translate(35, 0, 0);
  // // rotateX(frameCount * 6);
  // fill("blue");
  // texture(earth);
  // sphere(5);
  // translate(18, 0, 0);
  // fill("blue");
  // sphere(2);
  // pop();

  // Mars
  drawPlanet(6, 40, mars, 7, 20, "red", 3, 1);
  // translate(40, 0, 0);
  // push();
  // rotateY(frameCount * 6);
  // // rotateX(frameCount * 6);
  // fill("red");
  // texture(mars);
  // sphere(7);
  // translate(20, 0, 0);
  // fill("red");
  // sphere(3)
  // pop();

  // Jupiter
  drawPlanet(1, 143, jupiter, 7, 22, [51, 25, 0], 3, 5);
  // translate(43, 0, 0);
  // push();
  // rotateY(frameCount * 5);
  // // rotateX(frameCount * 6);
  // fill(51, 25, 0);
  // texture(jupiter);
  // sphere(7);
  // translate(22, 0, 0);
  // fill(51, 25, 0);
  // sphere(3)
  // pop();

  // Saturn
  drawPlanet(0.8, 145, saturn, 10, 23, [153, 153, 0], 5, 2);
  // translate(45, 0, 0);
  // push();
  // rotateY(frameCount * 4);
  // // rotateX(frameCount * 6);
  // fill(153, 153, 0);
  // texture(saturn);
  // sphere(10);
  // translate(23, 0, 0);
  // fill(153, 153, 0);
  // sphere(5);
  // pop();

  // Uranus
  drawPlanet(0.6, 150, uranus, 12, 25, [0, 255, 255], 6, 1.5);
  // translate(50, 0, 0);
  // push();
  // rotateY(frameCount * 7);
  // // rotateX(frameCount * 6);
  // fill(0, 255, 255);
  // texture(uranus);
  // sphere(12);
  // translate(25, 0, 0);
  // fill(0, 255, 255);
  // sphere(6);
  // pop();

  // Neptune
  drawPlanet(0.5, 160, neptune, 12, 28, [102, 102, 255], 6, 2);
  // translate(55, 0, 0);
  // push();
  // rotateY(frameCount * 2);
  // // rotateX(frameCount * 6);
  // fill(102, 102, 255);
  // texture(neptune);
  // sphere(12);
  // translate(28, 0, 0);
  // fill(102, 102, 255);
  // sphere(6);
  // pop();

  // Pluto
  drawPlanet(10, 180, pluto, 4, 28, [160, 160, 160], 2);
  // rotateY(frameCount * 10);
  // translate(100, 0, 0);
  // push();
  // rotateY(frameCount * 10);
  // // rotateX(frameCount * 4);
  // fill(160, 160, 160);
  // texture(pluto);
  // sphere(4);
  // translate(28, 0, 0);
  // fill(160, 160, 160);
  // sphere(2);
  // pop();
}
