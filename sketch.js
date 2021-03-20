var bg, bgImg;
var cat, mouse, catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3;

function preload() {
   bgImg=loadImage("images/garden.png");
   catImg1=loadImage("images/cat1.png");
   catImg2=loadAnimation("images/cat2.png","images/cat3.png");
   catImg3=loadImage("images/cat4.png");
   mouseImg1=loadImage("images/mouse1.png");
   mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImg3=loadImage("images/mouse4.png");
   //load the images here
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400);
    bg.addImage(bgImg);

    cat = createSprite(883,580,20,20);
    cat.addImage(catImg1);
    cat.scale=0.16;

    mouse = createSprite(210,575,20,20);
    mouse.addImage(mouseImg1);
    mouse.scale=0.125;

    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
  cat.velocityX = 0;
  cat.addAnimation("catDone", catImg3);
  cat.changeAnimation("catDone");
  mouse.addAnimation("mouseDone", mouseImg3);
  mouse.changeAnimation("mouseDone");  
  cat.x=300;
  }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
  cat.velocityX = -5;
  cat.addAnimation("catRunning", catImg2);
  cat.changeAnimation("catRunning"); 
  mouse.addAnimation("mouseTeasing", mouseImg2);
  mouse.changeAnimation("mouseTeasing"); 
  }



}
