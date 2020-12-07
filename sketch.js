const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,wrecker,ground;
var stand0,stand1;
var wrecker;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand0 = new Stand(390,300,250,10);
  stand1 = new Stand(700,200,200,10);
 

  block0 = new Block(300,275,30,40);
  console.log(block0);
  block1 = new Block(330,275,30,40);
  block2 = new Block(360,275,30,40);
  block3 = new Block(390,275,30,40);
  block4 = new Block(420,275,30,40);
  block5 = new Block(450,275,30,40);
  block6 = new Block(480,275,30,40);

  block7 = new Block(330,235,30,40);
  block8 = new Block(360,235,30,40);
  block9 = new Block(390,235,30,40);
  block10 = new Block(420,235,30,40);
  block11 = new Block(450,235,30,40);
  
  block12 = new Block(360,195,30,40);
  block13 = new Block(390,195,30,40);
  block14 = new Block(420,195,30,40);

  block15 = new Block(390,155,30,40);


  blocks0 = new Block(640,175,30,40);
  blocks1 = new Block(670,175,30,40);
  blocks2 = new Block(700,175,30,40);
  blocks3 = new Block(730,175,30,40);
  blocks4 = new Block(760,175,30,40);

  blocks5 = new Block(670,135,30,40);
  blocks6 = new Block(700,135,30,40);
  blocks7 = new Block(730,135,30,40);

  blocks8 = new Block(700,95,30,40);

  wrecker = Bodies.circle(50,200,20);
  World.add(world,wrecker);
  slingShot = new SlingShot(this.wrecker,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand0.display();
  stand1.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block0.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  fill("pink");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  fill("turquoise");
  block12.display();
  block13.display();
  block14.display();
  fill("grey");
  block15.display();
  fill("skyblue");
  blocks0.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  fill("turquoise");
  blocks5.display();
  blocks6.display();
  blocks7.display();
  fill("pink")
  blocks8.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,wrecker.position.x,wrecker.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.wrecker,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
