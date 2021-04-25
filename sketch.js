
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var boyImg;
var stone;
var treeImg;
var  launcherObject;
var launchingForce=100;
function preload(){
boyImg = loadImage("sprites/boy.png")	
treeImg = loadImage("sprites/tree.png")	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,600,width,20);

   stone = new Stone (190,460,30);
   mango1 = new Mango(1100,100,30)
   mango2 = new Mango(1100,100,30) 
   mango3 = new Mango(1100,100,30)
   mango4 = new Mango(1100,100,30)
   mango5 = new Mango(1100,100,30)
   mango6 = new Mango(1100,100,30)
   mango7 = new Mango(1100,100,30)
   mango8 = new Mango(1100,100,30)
   mango9 = new Mango(1100,100,30)
   mango10 = new Mango(1100,100,30)

	Engine.run(engine);
	
  launcherObject=new launcher(stone.body,{x:195,y:460})
}


function draw() {
  rectMode(CENTER);
  background(208,236,231);

  
  Engine.update(engine);
  
    image(boyImg,150,400,170,270);	
    image(treeImg,770,100,420,520);

    ground.display();
    
    stone.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();

    launcherObject.display();

  

    drawSprites();
 
}
function mouseDragged(){
   Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
	launcherObject.fly();
 }
 

 function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:335, y:460}) 
	  launcherObject.attach(stone.body);
	}
  }

