class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body=Bodies.rectangle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
        
    }
    display(){
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y)

        fill("pink");
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop ()
    }
}