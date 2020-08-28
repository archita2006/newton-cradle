class Chain{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness:1.0,
          //  length:20,
            pointB:{x:this.offsetX,y:offsetY}
           
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
       // console.log(options);
    }
    

    display(){
        
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+ this.offsetX
        var Anchor2Y = pointB.y+ this.offsetY
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
    
}