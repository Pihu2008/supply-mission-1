var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redZone1 = createSprite(310,600,20,100);
	redZone1.shapeColor=color("red");
	redZone2 = createSprite(400,650,200,20);
	redZone2.shapeColor=color("red");
	redZone3 = createSprite(490,600,20,100);
	redZone3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	var packageOptions = {restitution:0.5,
		 isStatic: true}
	PackageBody = Bodies.circle(width/2 , 200 , 5 , packageOptions);
	World.add(world, PackageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= PackageBody.position.x 
  packageSprite.y= PackageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( PackageBody , false);
 }
}



