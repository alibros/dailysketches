let w1,w2,w3,w4;
let img;
let imgPixels;
let walkers = [];
let useImage = false;

function preload() {
  img = loadImage('dog.png');
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  imgPixels = img.pixels;
  background(0);
  w1 = new Walker();
  w2 = new Walker();
  w3 = new Walker();
  w4 = new Walker();
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
  walkers.forEach(w => {
    w.step();
  });
}

class Walker {
  constructor(ox,oy){
    this.x = ox;
    this.y = oy;
    this.color = color(random(255),random(255),random(255));
  }

  show(){
    if(useImage){
      let idx = (this.y * width + this.x) * 4;
      let r = imgPixels[idx];
      let g = imgPixels[idx + 1];
      let b = imgPixels[idx + 2];
      stroke(r, g, b);
    } else{
      stroke(this.color);
    }
    point(this.x, this.y);
  }

  step(){
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
}


