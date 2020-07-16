//Global Variables
var player, monkey, jungle, jungleimg, ground, Play, End, gamestate, foodimg, foodGroup, obstacleGroup, obstimg;

var score;

function preload(){
 monkey = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png") 
  
 jungleimg = loadImage("jungle.jpg")
  
  foodimg = loadImage("Banana.png")
 
 obstimg = loadImage("stone.png")
 
}


function setup() {
  createCanvas(600,300);
  jungle = createSprite(300, 150, 30, 30)
  jungle.addImage("background", jungleimg)
  jungle.scale = 0.8
  
  ground = createSprite(300, 300, 600, 40)
  ground.visible = false
  
  Play = 1
  End = 0
  gamestate = Play
  
  player = createSprite(130,250,30,30)
  player.addAnimation("animation of monkey", monkey)
  player.scale = 0.08
  player.y = ground.y
  
  score = 0
  
  foodGroup = createGroup()
  obstacleGroup = createGroup()
  
}


function draw(){
 background(255); 
player.collide(ground)
  if (gamestate === Play){

  if (keyWentUp("space")){
 player.velocityY = -14
 
 }
  
  player.velocityY = player.velocityY + 0.8
  
  jungle.velocityX = -4.5
  if (jungle.x < 180){
  jungle.x = jungle.width/3
   
    
    
  }
    banana() 
    obstacles()
    if (foodGroup.isTouching(player)){
       foodGroup.destroyEach()
       score = score+2
      switch(score){
          case 10: player.scale = .1
          break;
          case 20: player.scale = .3
          break;
          case 30: player.scale = .5
          break;
          case 40: player.scale = .6
          break;
          defualt: break;
        
      
      }
      }
    
    if (obstacleGroup.isTouching(player)){
    player.scale = 0.08
    }
}  
  
  
  
  
  drawSprites()
 
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score, 500, 50);
  
  
}


function banana(){

  if (frameCount % 65 === 0){
  var food = createSprite(600, 150, 30, 30)
  food.addImage(foodimg)
  food.y = random(150, 210)
  food.scale = .06
  food.lifetime = 133
    food.velocityX = jungle.velocityX
  foodGroup.add(food)
  }
}

function obstacles(){
  
  if (frameCount % 110 === 0){
  var obstacles = createSprite(600, 260, 30, 30)
  obstacles.addImage(obstimg)
  obstacles.scale = .1
  obstacles.velocityX = jungle.velocityX
  obstacleGroup.add(obstacles)
  
  
  }

}


