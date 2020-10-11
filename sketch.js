const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var line1, line2, line3, dustbin;
var ground;

function preload() {
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	ball = new Paper(60, 600, 20);

	ground = new Ground();

	line1 = new Box(630, 690, 110, 10);
	line2 = new Box(580, 620, 10, 150);
	line3 = new Box(680, 620, 10, 150);

	dustbin = new Dustbin(630, 650, 120, 10);

}

function draw() {
	rectMode(CENTER);
	background("gray");

	ground.display();

	line1.display();
	line2.display();
	line3.display();

	dustbin.display();

	ball.display();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 55, y: -55 })
	}

}



