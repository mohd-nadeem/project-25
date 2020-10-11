class Ground {
  constructor() {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(400, 670, 800, 20, options);


    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    stroke("yellow");
    fill("yellow");
    rect(pos.x, pos.y, 800, 20);

  }
};