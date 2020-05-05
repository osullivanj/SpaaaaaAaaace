/* globals plane width height ambientMaterial ambientLight createVideo keyCode print imageMode CENTER loadImage createCanvas innerWidth innerHeight WEBGL angleMode DEGREES noStroke background push rotateY frameCount translate fill texture sphere pop key keyIsPressed createGraphics */

var markImage;
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
var spaceMan;
var showSpaceMan = false;
var markPic;

function preload () {
  markImage = loadImage('mark.png');
  sun = loadImage('sun.jpg');
  mercury = loadImage('mercury.jpg');
  venus = loadImage('venus.jpg');
  earth = loadImage('earth.jpg');
  mars = loadImage('mars.jpg');
  jupiter = loadImage('jupiter.jpg');
  saturn = loadImage('saturn.jpg');
  uranus = loadImage('uranus.jpg');
  neptune = loadImage('neptune.jpg');
  pluto = loadImage('pluto.jpg');
  spaceMan = createVideo('SpaceMan.mp4');
  spaceMan.hide(); // need to hide it immediately
}

function setup () {
  createCanvas(innerWidth, innerHeight, WEBGL);
  imageMode(CENTER);
  angleMode(DEGREES);
  markPic = createGraphics(256, 256);
  markPic.image(markImage, 20, 70, 80, 80);

  // magic to make the browser not scroll with the arrow keys
  window.addEventListener('keydown', function (e) {
  // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  }, false);
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

function drawVortex () {
  if (showSpaceMan === true) {
    push();
    ambientMaterial(255);
    translate(0, 0, -200);
    texture(spaceMan);
    plane(width * 1.2, height * 1.2);
    pop();
  }
}

function draw () {
  noStroke();
  background(0);
  ambientLight(255);

  drawVortex();

  // Sun
  fill(255, 255, 153);
  texture(sun);
  if (keyIsPressed) {
    if (key === ' ') {
      texture(markPic);
    }
  }
  rotateY(-90);
  sphere(25);

  // Planets
  drawPlanet(2, 40, mercury, 2, 15, [102, 0, 204], 1, 1);
  drawPlanet(4, 33, venus, 3, 22, [255, 153, 51], 2, 1);
  drawPlanet(1, 35, earth, 5, 18, [0, 128, 255], 2, 10);
  drawPlanet(6, 40, mars, 7, 20, [255, 0, 0], 3, 1);
  drawPlanet(1, 143, jupiter, 7, 22, [51, 25, 0], 3, 5);
  drawPlanet(0.8, 145, saturn, 10, 23, [153, 153, 0], 5, 2);
  drawPlanet(0.6, 150, uranus, 12, 25, [0, 255, 255], 6, 1.5);
  drawPlanet(0.5, 160, neptune, 12, 28, [102, 102, 255], 6, 2);
  drawPlanet(10, 180, pluto, 4, 28, [160, 160, 160], 2);
}

function keyPressed () {
  // toggle the drawVortex
  if (keyCode !== 32) { // keyCode 32 is space
    showSpaceMan = !showSpaceMan;
    print('Space Man: ' + showSpaceMan);
    if (showSpaceMan) {
      spaceMan.loop();
    } else {
      spaceMan.stop();
    }
  }
}
