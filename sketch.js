var dog,happydog,database;
var foods,foodStock;

function preload()
{
	dog=loadImage("dog.png");
  happydog=loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);

  Dog=createSprite(250,300,10,10);
  Dog.addImage(Dog);
  Dog.scale=0.25;

foodStock=database.ref('food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,149,87);
if (keyWentDown(UP-ARROW)) {
  writeStock(foodS);
  dog.addImage(happydog);
}
  drawSprites();
Text("Note Press UP-ARROW Key To Feed Drago Milk!",250,250);
textSize(16);
Stroke("green");
fill("white");
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
}else{
  x=x-1;
}
database.ref('/').update({
  Food:x
})
}