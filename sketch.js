var ship;
var sea;

function preload(){
  
  sea_bg= loadImage("sea.png");
  ship_issailing= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup(){
  createCanvas(1200,500);
  
  sea = createSprite(200,180,400,20);
  sea.addImage(sea_bg);
  sea.velocityX = -4;

  ship= createSprite(180,300,20,30);
  ship.addAnimation("sailing",ship_issailing);
  ship.scale=0.4;
}

function draw() {
  background("blue");
  
  if(sea.x<0) {
   
    sea.x= sea.width/2;

  }

  drawSprites();

}