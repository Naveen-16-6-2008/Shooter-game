var PLAY = 0;
var END = 1;
var gameState = 0;
var shooter,shooterimg;
var dice,dice1,dice2,dice3,dicegroup;
var spaceship,spaceshipimg,spaceGroup;
var score = 0;
var gameover,gameoverimage;


function preload(){
  shooterimg = loadImage("shooter.png");
  ball1 = loadImage("dice1.png");
 ball2 = loadImage("dice2.png");
  ball3 = loadImage("dice3.png");
  spaceshipimg = loadImage("spaceship.png")
  gameoverimage = loadImage("game over.png")
}

function setup(){
    createCanvas(500, 500);
 
  shooter = createSprite(500,400,20,20);
  shooter.addImage(shooterimg);
  shooter.scale = 0.8;
  
  spaceGroup = new Group();
  diceGroup = new Group();
}


function draw(){
  
background("lightblue")
    textSize(15);

  if(spaceGroup.isTouching(shooter)){
    spaceGroup.destroyEach();
    diceGroup.destroyEach();
    shooter.addImage(gameoverimage);
    shooter.x = 200;
    shooter.y = 200;
    gameState = END;
  }
  
  
  
  
  if(gameState === PLAY){
    dices();
  Space();
    shooter.x = World.mouseX;
  
    
     if(diceGroup.isTouching(shooter)){
    diceGroup.destroyEach();
       score = score+2;
      
  shooter.x = World.mouseX;
  }
  else if(gameState === END){
    diceGroup.destroyEach();
    spaceGroup.destroyEach();
   diceGroup.setVelocityEach(0);
    spaceGroup.setVelocityEach(0);
    
  }
  }
  text("score :"+score,200,50)
  
  drawSprites();
}
function dices(){
if (World. frameCount%80===0){
position = Math.round(random(1,2));

  dice =createSprite(400, 200, 20, 20);
dice. scale=0.5;
r=Math.round(random(1,4)) ;
if (r == 1) {
dice.addImage("b1",ball1);
} 
 if (r == 2) {
dice.addImage("b1",ball1);
} 
  if (r == 3) {
dice.addImage("b1",ball1);
} 
dice.y=Math.round(random(50, 340));
dice.velocityY=7;
dice.setLifetime=100;
  
  diceGroup.add(dice);
  
  if(position == 1)
    {
      dice.x = 400;
      dice.velocityX = -(7+(score/4));
    }
  else
  {
    if(position == 2){
        dice.x = 0;
dice.velocityX = (7+(score/4))
    }
  }
}
}

function Space ( ){
if (World. frameCount%200==0){
space=createSprite( 400, 200, 20, 20);
space.addImage( "moving", spaceshipimg);
space.scale = 0.2;
space.y=Math. round ( random(100, 300 )) ;
space.velocityY=(8+(score/10));
space.setLifetime=50;
spaceGroup.add (space) ;
}
}
