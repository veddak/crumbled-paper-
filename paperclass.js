class Paper {

    constructor(x,y,radius){
     
var options ={
    isStatic: false,
    'restitution':0.3,
    'friction':0,
    'density':1.2
}

this.x=x;
this.y=y;
this.r=radius;
this.image=loadImage("paper.png");
 this.body=Bodies.circle(this.x,this.y,this.r,options);
 World.add(world,this.body);

    }

    display(){
    var p=this.body.position
    push();
   translate(p.x,p.y);
   imageMode(CENTER);
   image(this.image,0,0,this.r,this.r);
   pop();
    }
}