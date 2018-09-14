class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getPos() {
    return [this.x, this.y];
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Enemy extends Entity {
  constructor(position, size, color, velocity) {
    super(position[0], position[1]);
    this.size = size;
    this.color = color;
    this.velocity = velocity;
  }
  
  getSize() {
    return this.size;
  }

  setSize(size) {
    this.size = size;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getVelocity() {
    return this.velocity;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  render() {
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    if ((this.x + this.size / 2) >= width || (this.x - this.size / 2) <= 0) {
      this.velocity[0] *= -1;
    }
    if ((this.y + this.size / 2) >= height || (this.y - this.size / 2) <= 0) {
      this.velocity[1] *= -1;
    }
    this.setPos(this.x + this.velocity[0], this.y + this.velocity[1]);
  }
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low)) + low;
}

function generateEnemy() {
  return new Enemy([30, 30], 50, [randomInt(0, 256), randomInt(0, 256), randomInt(0, 256)], [randomInt(1, 11), randomInt(1, 11)]);
}

var enemies = []

for (var i = 0; i < 1000; i++) {
  enemies.push(generateEnemy());
}

function setup() {
  // put setup code here
  createCanvas(1280, 720);
  noCursor();
}

function draw() {
  // put drawing code here
  background(100);
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].move();
    enemies[i].render();
  }
  // enemy1.move();
  // enemy1.render();
  // fill(255, 0, 0);
  // ellipse(mouseX, mouseY, 30, 30);

}