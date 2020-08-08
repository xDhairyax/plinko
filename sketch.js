const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var division;
var ar=[];
var ar1=[];
var ar2=[];
var ar3=[];
var plinko,plinko1,plinko2;

var particles=[];


function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(480,800);
 ground = new Ground(400,780,900,40);


 for(var i=100;i<500;i=i+100){
  division=new Division(i,700,10,500);
 ar.push(division);
  }

 for(var i=50;i<500;i=i+50){
   plinko=new Plinko(i,130);
   ar1.push(plinko);
 }

 for(var j=40;j<400;j=j+50){
  // plinko1=new Plinko(j,170);
   ar2.push(new Plinko(j,170));
 }

 for(var k=50;k<500;k=k+50){
   plinko2=new Plinko(k,210);
   ar3.push(plinko2);
 }

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10),10,10));
 }


}

function draw() {
  Engine.update(engine);
  background(0);  
ground.display();

for(var i=0;i<4;i++){
  ar[i].display();
}
 for(var i=0;i<10;i++){
   ar1[i].display();
 }
 for(var j=0;j<10;j++){
   ar2[j].display();
 }

 for(var k=0;k<10;k++){
   ar3[k].display();
 }

particles.display();
 
  drawSprites();
}