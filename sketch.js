
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var log1,log2,log3;
var ball;

function preload()
{
	}

function setup() {
	createCanvas(1280, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(776,670,12800,15);

	log1=new Dustbin(928,660,200,20);
	log2=new Dustbin(818,620,20,100);
  log3=new Dustbin(1020,620,20,100);

	ball=new Ball(85,628,20,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
 
  ground.display();
  ball.display();

  log1.display();
  log2.display();
  log3.display();

}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
	}
	}

