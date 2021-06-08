const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bg,chocImg,girlImg,gorImg,lollyImg;
var bgGround;
var ground;
var girl;

function preload(){
  bg = loadImage("jungleBg.jpg");
  chocImg = loadImage("chocolate.png");
  girlImg = loadImage("girl.png");
  gorImg = loadImage("gorila.png");
  lollyImg = loadImage("lollypop.png");
}

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  bgGround = createSprite(0,0,1500,800);
  bgGround.addImage(bg);  
  bgGround.scale = 3.5;
  bgGround.velocityX = -4;
  bgGround.x = bgGround.width/2;

  ground = createSprite(0,600,1500,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.visible = false;

  girl = createSprite(75,500,20,20);
  girl.addImage(girlImg);
  girl.scale = 3;
}

function draw() {
  background(0); 
 
  if(bgGround.x < 100){
    bgGround.x = bgGround.width/2;
  }

  if(ground.x < 100){
    ground.x = ground.width/2;
  }

  
  drawSprites();
}


