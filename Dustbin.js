class Dustbin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }

    this.image = loadImage("dustbingreen.png")
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    stroke("white");
    fill("white");
    image(this.image, pos.x, pos.y - 65, 120, 150);
  }
};
