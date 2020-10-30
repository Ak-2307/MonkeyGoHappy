
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
background(200);
  
  //creating monkey sprite
  monkey = createSprite(70,440,20,20);
  monkey.addAnimation("the monkey",monkey_running);
  monkey.scale = 0.25;
  
  //creating the ground sprite
  ground = createSprite(350,520,700,20);
  ground.velocityX = -2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
background(200);
  
  //making it an infinite ground
    if (ground.x < 250){
      ground.x = ground.width/2;
    }
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  //making the monkey collide with the ground
  monkey.collide(ground);  
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 50,50);
  
  
  
  SpawnFood();
  SpawnObstacles();
  
  drawSprites();
}

function SpawnFood(){
  if (frameCount % 100 == 0){
  banana = createSprite(400,Math.round(random(120,200)),20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.10;
  banana.lifetime = 500;
  banana.velocityX = -3;
  FoodGroup.add(banana);
  }
}

function SpawnObstacles(){
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,470,10,40);
    obstacle.velocityX = -6; //-(6 + 3*score/100);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstacle.scale = 0.25;
   obstacleGroup.add(obstacle);
    
   
   }
}


