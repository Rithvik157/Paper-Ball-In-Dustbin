
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papers,ground1,dustbin2,dustbin1,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);
    papers = new Paper(200,300);
    ground1 = new Ground(400,655);
    dustbin1 = new Dustbin(633,588,10,120);
    dustbin2 = new Dustbin(740,643,220,10);
    dustbin3 = new Dustbin(798,588,10,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  papers.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(papers.body,papers.body.position,{x:10,y:-15})
 } }

