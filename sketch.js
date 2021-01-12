const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var sky, skyImg;
var fairy, fairyflying, fairyVoice;
var star, starImage;
var star2, starImg;






function preload()
{
	
skyImg = loadImage("starryNight.jpg");
fairyflying = loadAnimation("fairyImage1.png","fairyImage2.png");
fairyVoice = loadSound("music.mp3");
starImage = loadImage("starImage.png");
starImg = loadImage("star.png");
	
	

}

function setup() {

createCanvas(1000,700);

engine = Engine.create();
world = engine.world;


var sky_options={
  isStatic:true
}
sky = Bodies.rectangle(500,650,1000,10,sky_options);
World.add(world,sky);


var fairy_options={
  restitution:1.0
}

fairy = Bodies.rectangle(150,450,20,20,fairy_options);
World.add(world,fairy);

var star_options= {
  isStatic:true
}
star = Bodies.rectangle(920,150,20,20,star_options);
World.add(world,star);

star2 = Bodies.rectangle(870,150,20,20,star_options);
World.add(world,star2);

fairyVoice.play();

}


function draw() {
 
  Engine.update(engine);

  sky = createSprite(sky.position.x,sky.position.y,1000,10);
  sky.addImage(skyImg);

  star = createSprite(star.position.x,star.position.y,20,20);
  star.addImage(starImage);
  star.scale = 0.05;
  

  fairy = createSprite(fairy.position.x,fairy.position.y,20,20);
  fairy.addAnimation("flying",fairyflying);
  fairy.scale = 0.3;
  

  star2 = createSprite(star2.position.x,star2.position.y,20,20);
  star2.addImage(starImg);
  star2.scale = 0.15;

 
  keyPressed();

  if(fairy.isTouching(star)){
    star.velocityY = 0;
  }

  drawSprites();

}

function keyPressed() {
  //write code here
  
if (keyDown(DOWN_ARROW)) {
  star.velocityY = 2;
}
     

if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x-10;
}

if(keyDown(RIGHT_ARROW)){
	fairy.x = fairy.x+10;
}
  
  
  
  
}
