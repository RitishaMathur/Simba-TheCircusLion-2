var alien,bg;
var ground,gr;
var ringM,ringMaster;
var simba,simbaWalk,simbaStay,simbaJump;
var score =0;
var explosion;
var bulletImg,bulletGroup;
var barrelGroup;
var ghostImg;

function preload(){
alien=loadAnimation("Alien/skeleton-walking_0.png","Alien/skeleton-walking_1.png","Alien/skeleton-walking_2.png","Alien/skeleton-walking_3.png","Alien/skeleton-walking_4.png","Alien/skeleton-walking_5.png","Alien/skeleton-walking_6.png",
                    "Alien/skeleton-walking_7.png","Alien/skeleton-walking_8.png","Alien/skeleton-walking_9.png","Alien/skeleton-walking_10.png","Alien/skeleton-walking_11.png","Alien/skeleton-walking_12.png","Alien/skeleton-walking_13.png",
                    "Alien/skeleton-walking_14.png","Alien/skeleton-walking_15.png","Alien/skeleton-walking_16.png","Alien/skeleton-walking_17.png","Alien/skeleton-walking_18.png","Alien/skeleton-walking_19.png","Alien/skeleton-walking_20.png")

simbaWalk=loadAnimation("rabbit-0.png","rabbit-1.png","rabbit-2.png","rabbit-3.png");
explosion=loadAnimation("explosion/EXPLOSIONS1.PNG")                 

bg=loadImage("bg.png")
gr=loadImage("ground.png")
barr=loadImage("barrel1.png")
ringM=loadImage("ringMaster.png")
ring=loadImage("fireRing.png")
//simbaStay=loadAnimation("simba/lion walking-3.png")
simbaJump=loadAnimation("rabbit-1.png")
bulletImg=loadImage("Bullet-2.png")
ghostImg=loadImage("ghost.png")
}

function setup(){
createCanvas(1000,600)
circus=createSprite(500,300,1000,800)
circus.addImage(bg)
circus.scale=5;

ground=createSprite(500,550,800,20);
ground.addImage(gr)
ground.scale=0.7

ringMaster=createSprite(100,440,40,10)
ringMaster.addImage(ringM)
ringMaster.scale=0.15
ringMaster.velocityX=-3

simba=createSprite(100,470,40,10)
//simba.addAnimation("stay",simbaStay)
simba.addAnimation("walking",simbaWalk)
simba.addAnimation("jump",simbaJump)
simba.scale=0.45;

bulletGroup=new Group()
barrelGroup= new Group()
}

function draw(){
background("black")

//circus.velocityX=-5
if(circus.x<300){
  circus.x=500
}

if(keyWentDown(RIGHT_ARROW)){
  simba.changeAnimation("walking")
  
}
if(keyDown(RIGHT_ARROW)){
  //simba.x=simba.x+3
  circus.x=circus.x-3
}
console.log(simba.x)
//if(keyWentUp(RIGHT_ARROW)){
  //simba.changeAnimation("stay")
//}

if(keyWentDown(UP_ARROW)&&(simba.y>=300)){
  simba.velocityY=-5
  //simba.changeAnimation("jump")
}

//if(keyWentUp(UP_ARROW)){
 // simba.changeAnimation("stay")
//}
simba.velocityY=simba.velocityY+0.09

simba.collide(ground)

spawnBarrels();
//spwanRings();
if(keyDown("space")){
  spawnBullets();
}
drawSprites();
fill("white")
textSize(20)
text("score: "+score,900,50)
}


function spawnBarrels(){
  if(frameCount % 200 ===0){
   var barrel = createSprite(1300,490,40,10)
   barrel.addImage(barr)
   barrel.velocityX=-3;
   barrel.scale=0.15
   barrel.lifetime=700;
   barrelGroup.add(barrel)

  }
}

function spwanRings(){
  if(frameCount % 200 === 0){
    var fireRing= createSprite(1000,460,40,10)
    fireRing.addImage(ring)
    fireRing.velocityX=-3;
    fireRing.lifetime=400;
    fireRing.scale=0.15
  }
}

function spawnBullets(){
  var bullet = createSprite(150,simba.y,40,10)
  bullet.addImage(bulletImg)
  bullet.velocityX=+3;
  bullet.scale=0.06
  bullet.lifetime=400
  bulletGroup.add(bullet)
}

function spwanGhost(){
  if(frameCount % 200===0)
  var ghost=createSprite(1000,300,40,10)
  ghost.addImage(ghostImg)
  ghost.velocityX=-3;
  ghost.lifetime=400
}