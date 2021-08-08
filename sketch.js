var robber, robberImg;
var cashImg,diamondsImg,jwelleryImg,swordImg,copImg, cop;
var background;
var PLAY;
var END;
var gameOver;
var gameState;
var Cash, diamonds, jwellery;
var treasureCollection = 0;

function preload(){
 robberImg = loadImage("robber.png");
 backgroundImg = loadImage("background.png");
 copImg = loadImage("cop.png");
 cashImg = loadImage("cash.png");
 diamondsImg = loadImage("diamonds.png");
 jwelleryImg = loadImage("jwell.png");

}

function setup() {
createCanvas(windowWidth,windowHeight);

background=createSprite(width/2,200);
background.addImage(backgroundImg);
background.velocityX = 4;

 robber = createSprite(100,250,20,50);
 robber.addImage(robberImg);
 robber.scale = 0.5;


 
 robber.setCollider("rectangle",0,0, robber.width, robber.height);

 cashG=new Group();
 diamondsG=new Group();
 jwelleryG=new Group();
 copGroup=new Group();
 
}

function draw() {
 image(backgroundImg,0, 0, width, height);
 drawSprites();

 if(gameState===PLAY){
 if(background.x > height){
    background.x = height/2;
 }
 
 robber.y = World.mouseY;
 robber.x = World.mouseX;

 }
 

  createCash();
  createDiamonds();
  createJwellery();
  createCop();

  if (cashG.isTouching(robber)) {
    cashG.destroyEach();
    treasureCollection=treasureCollection+50;
  }
  else if (diamondsG.isTouching(robber)) {
    diamondsG.destroyEach();
    treasureCollection=treasureCollection+100;
    
  }else if(jwelleryG.isTouching(robber)) {
    jwelleryG.destroyEach();
    treasureCollection= treasureCollection + 150;
    
  }else{
    if(copGroup.isTouching(robber)) {
        treasureCollection= treasureCollection - 200;

    cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        copGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        copGroup.setVelocityYEach(0);

    }
} 
textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
}

function createCash() {
    if (World.frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cashG.add(cash);
    }
  }
  
  function createDiamonds() {
    if (World.frameCount % 320 == 0) {
    var diamonds = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale=0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 150;
    diamondsG.add(diamonds);
  }
  }
  
  function createJwellery() {
    if (World.frameCount % 410 == 0) {
    var jwellery = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale=0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jwelleryG.add(jwellery);
    }
  }
  
  function createCop(){
    if (World.frameCount % 530 == 0) {
    var cop = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    cop.addImage(copImg);
    cop.scale=0.1;
    cop.velocityY = 3;
    cop.lifetime = 150;
    copGroup.add(cop);
    }
  }

