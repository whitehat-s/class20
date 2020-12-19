var fixedRect , movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80) //25

  movingRect = createSprite(400,200,80,30) //40

  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

}

function draw() {
  background(0);  
  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log(movingRect.x - fixedRect.x)  //65

  if(movingRect.x - fixedRect.x === fixedRect.width/2 + movingRect.width/2)  {
    fixedRect.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
 // else{
   // fixedRect.shapeColor = "green"
 // movingRect.shapeColor = "green"
 // }


  drawSprites();
}