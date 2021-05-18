class Polygon{
    constructor(x,y,r) {
    var options = {
        isStatic:false,
        restitution:1
    }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }
    display() {
        
        ellipse(this.body.position.x,this.body.position.y,this.r);
        ellipseMode(RADIUS);
    }
}