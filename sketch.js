
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
//var bobDiameter ; 


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(410,120,220,20);
	bob1 = new Bob(0,0,10,10);
	bobObject1 = new Bob(320,320,20,20);
	bobObject2 = new Bob(365,320,20,20);
	bobObject3 = new Bob(410,320,20,20);
	bobObject4 = new Bob(455,320,20,20);
	bobObject5 = new Bob(500,320,20,20);
	chain1 = new Chain(bobObject1.body,roofObject.body,-85,0);
	chain2 = new Chain(bobObject2.body,roofObject.body,-40,0);
	chain3 = new Chain(bobObject3.body,roofObject.body,0,0);
	chain4 = new Chain(bobObject4.body,roofObject.body,40,0);
	chain5 = new Chain(bobObject5.body,roofObject.body,80,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roofObject.display();
  bob1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-2,y:-1}); } 
		} 
   
 



