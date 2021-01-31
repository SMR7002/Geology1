
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	plane1 = new Plane(300,600,900,20);

	hammer1 = new Hammer(300,200, 100,20);

	stone1 = new Stone(200,580,40,40);

	rubber1 = new Rubber(20,600,550);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  plane1.display();
  hammer1.display();
  stone1.display();
  rubber1.display();
  drawSprites();
 
}



