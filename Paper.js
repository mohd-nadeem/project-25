class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restituton: 0.3,
            friction: 0.5,
            density: 1
        }

        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill("green");
        image(this.image, pos.x, pos.y, 50, 50);
    }

}