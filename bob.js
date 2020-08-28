class Bob{
    
    constructor(x,y,radius){
    var options = {
    isStatic:false,
    restitution:1.0,
    friction:0.5,
    density:0.01,
    
    }
     this.body=Bodies.circle(x,y,radius,options);
     this.r=radius;
     //var bobDiameter = radius+radius;
    World.add(world,this.body);
    //console.log(options);
    }
    display(){
       var pos =this.body.position;
        ellipse(pos.x,pos.y,this.r,this.r);
        ellipseMode(RADIUS);
        fill("purple"); 
    }
}    