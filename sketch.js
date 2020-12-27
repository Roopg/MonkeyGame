
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score,ground,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
//createCanvas(400,400);
  monkey=createSprite(20,360,40,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,400,900  ,20);
  ground.shapeColor="black";
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup=createGroup();
  obstaclesGroup=createGroup();

  
}


function draw() {
  background("grey");
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if (keyDown("space"))
  {
    monkey.velocityY=-12;}
    monkey.velocityY=monkey.velocityY+0.8;
    console.log(monkey.velocityY);

   monkey.collide(ground);
   banana();
   obstacle();
   drawSprites();
  var survivalTime=0;
  textSize("20");
  stroke('black');
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime: "+survivalTime,150,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
  }
  
}

function banana(){
  
if (frameCount%80===0){
  var banana=createSprite(400,350,5,5);
  banana.addImage(bananaImage);
  banana.scale=0.05  ;
  banana.velocityX=-8;
  banana.setLifetime=50;
  banana.y=Math.round(random(250,350));
  monkey.depth=banana.depth+1;
  FoodGroup.add(banana);
}
  
}

function obstacle(){
  
  if (frameCount%300===0){
  
  var obstacle=createSprite(800,350,5,5);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-5;
  obstacle.setLifetime=300;
  //obstacle.y=Math.round(random(120,200));
  obstaclesGroup.add(obstacle);
}

}