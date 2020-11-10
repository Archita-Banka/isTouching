var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 100);
  movingrect = createSprite(400,200,100,50);
 
  fixedrect.debug = true;
  movingrect.debug = true;
  



}

function draw() {
  background("black"); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY; 

 

 if(movingrect.x - fixedrect.x<fixedrect.width/2+ movingrect.width/2 && movingrect.y - fixedrect.y<fixedrect.width/2+ movingrect.width/2 
  && fixedrect.x - movingrect.x<fixedrect.width/2+ movingrect.width/2 && fixedrect.y - movingrect.y<fixedrect.width/2+ movingrect.width/2 ){
   movingrect.shapeColor = "red";
   fixedrect.shapeColor = "red";
 }
 else { 
  fixedrect.shapeColor = "blue";
  movingrect.shapeColor = "purple";
 }

  drawSprites();
}