function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}

class Planet {
	constructor(x, y, r, c1, c2, c3) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.c1 = c1;
		this.c2 = c2;
		this.c3 = c3;
	}
	show() {
		fill(this.c1, this.c2, this.c3);
		ellipse(this.x, this.y, this.r);
	}
}
let planets = [
	new Planet(70, 50, 20, 150, 150, 150),
	new Planet(-110, -60, 30, 250, 80, 0),
	new Planet(0, -180, 35, 0, 160, 255),
	new Planet(30, 220, 25, 255, 130, 0),
	new Planet(-180, 210, 45, 255, 170, 0),
	new Planet(340, -30, 50, 180, 120, 100),
	new Planet(220, 350, 35, 0, 200, 255),
	new Planet(-340, -320, 45, 0, 50, 255)
];
