class Particle{
    constructor(x,y){
        var options={
            restituition:0.4
        }

     this.radius=10;
     this.body=Bodies.circle(x,y,10,options);
     this.color=color(random(0,255),random(0,255),0,255);
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop();
    }
}