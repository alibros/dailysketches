//Ali Bross
//Daily Sketches
//November 5th 2024
//Red v Blue walkers

let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(0);
}

function mousePressed() {
  let w = new Walker(mouseX, mouseY);
  walkers.push(w);
}

function mouseDragged() {
  let w = new Walker(mouseX, mouseY);
  walkers.push(w);
}

function draw() {
  background(0, 10);
  
  let a = frameCount % 360;
  walkers.push(new Walker(100*sin(a)+width/2,100*cos(a)+height/2));
  
  
  walkers.forEach(w => {
    w.walk();
    w.step();
  });
}

class Walker {
  constructor(ox, oy) {
    this.x = ox;
    this.y = oy;
    this.color = ox > width / 2 ? color(255, 50, 50) : color(50, 50, 255);
    this.tx = random(20);
    this.ty = random(220);
  }

  show() {
    fill(this.color);
    stroke(this.color);
    point(this.x, this.y);
    circle(this.x, this.y, 5);
  }

  step() {
    let choice = floor(random(4));
    if (choice === 0 && this.x < width - 1) {
      this.x++;
    } else if (choice === 1 && this.x > 0) {
      this.x--;
    } else if (choice === 2 && this.y < height - 1) {
      this.y++;
    } else if (choice === 3 && this.y > 0) {
      this.y--;
    }
    this.show();
  }

  walk() {
    this.x += map(noise(this.tx), 0, 1, -1.1, 1.1);
    this.y += map(noise(this.ty), 0, 1, -1.1, 1.1);
    this.tx += random(-0.1, 0.1);
    this.ty += random(-0.1, 0.1);
    this.show();
  }
}
