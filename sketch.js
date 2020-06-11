var speed,weight,damage=0
var bullet, wall
var thickness , Lbullet , Lwall
var bulletRightEdge=0, bulletLeftEdge=0

function setup() {
  createCanvas(1600,400);
  
  speed=random(15,25)
  weight=random(500,1000)
  thickness=random(25,35)
 
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor="white"
  
  bullet = createSprite(50,200,100,25)
  bullet.shapeColor="blue"
  bullet.velocityX = speed
}

  function draw() {
    background(0);  

 
    if (hasCollided()){
       
     
        damage=weight*speed*speed/(thickness*thickness*thickness)
  }
  console.log(damage)
  if(damage<10 && damage>0){
     wall.shapeColor="green"

  }
  else if(damage>10){
    wall.shapeColor = "red"
  }
  else{
    wall.shapeColor="white"
  }
  drawSprites()
  }
  function hasCollided(){
    //bulletRightedge=bullet.x+bullet.width/2
   // wallLeftEdge=wall.x-wall.width/2
  
    if(bullet.x+bullet.width/2>=wall.x-wall.width/2){
        bullet.velocityX = 0
        bullet.x=wall.x-wall.width/2-bullet.width/2
      return true
    }else{
    return false;
 }
}