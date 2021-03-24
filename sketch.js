var coverimg;
var tank1;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var x,y = 100;

function preload(){
  coverimg = loadImage("Cover.png");

}

function setup(){
  createCanvas(displayWidth-20,displayHeight-70);
  tank1 = createSprite(600,400,50,50);

  wall1 = createSprite(600,100,150,10);
}
function draw(){
background("white");


y = y + 200;

x = displayWidth - tank1.x;

if(keyIsDown(UP_ARROW)){
  tank1.y -= 5 ;
}
if(keyIsDown(DOWN_ARROW)){
  tank1.y += 5 ;
}
if(keyIsDown(RIGHT_ARROW)){
  tank1.x += 5 ;
}
if(keyIsDown(LEFT_ARROW)){
  tank1.x -= 5 ;
}


drawSprites();


}