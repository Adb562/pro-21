
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var r1,r2;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var  ball_options={
		restitution : 1.5,
		density: 1.2

	}


	ball =	Bodies.circle(260,100,20,ball_options)
	World.add(world,ball);

	var ground_options={
		isStatic:true
	}
	ground = Bodies.rectangle(400,680,1600,20,ground_options)
	World.add(world,ground);
	r1 = Bodies.rectangle(900,580,20,200,ground_options)
	World.add(world,r1);
	r2 = Bodies.rectangle(1150,580,20,200,ground_options)
	World.add(world,r2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1600,20);
  rect(r1.position.x,r1.position.y,20,200);
  rect(r2.position.x,r2.position.y,20,200);
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-75})
	}
	
}

