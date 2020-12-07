const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var particles=[];
var particles;
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
 
  engine = Engine.create();
    world = engine.world;
    for(var k=0; k <=width; k = k+80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight ));
    }
    for(var j= 40; j<=width;j=j+50){
      plinkos.push(new Plinkos(j,75));
      }
      
      for(var j = 15; j <=width-10 ; j=j+50){
      plinkos.push(new Plinkos(j,175));
      }
}

function draw() {
  background("black");
  Engine.update(engine) 
  for(var i=0; i <plinkos.length; i++){
    plinkos[i].display();
    }


for(var k =0; k <divisions.length; k++){
divisions[k].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2+30), 10,10   ))
      }
    
    for(var j=0; j <particles.length; j++){
      particles[j].display();
      }
  drawSprites();
}
function mousePressed(){
if (gamestate!=="end")
{
count++;
particle=new Particle(mouseX,10,10,10);
}

}