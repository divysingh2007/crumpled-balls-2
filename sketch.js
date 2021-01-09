var   trash,trashImg,box,boxImg;
var trashBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
trashImg=loadImage("trash.png");
boxImg=loadImage("dustbin.png");

}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

 trash=createSprite(200,620,10);
trash.addImage(trashImg);
trash.scale=0.1;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	box1=createSprite(500,600,10,50);
	box1.addImage(boxImg);
	box1.scale=0.3;
	engine = Engine.create();
	world = engine.world;

	trashBody = Bodies.circle(200 , 650 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, trashBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(trashBody,trashBody.position,{x:85,y:-85});

    
  }
}



