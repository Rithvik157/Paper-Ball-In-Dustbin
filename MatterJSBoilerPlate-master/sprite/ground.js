class Ground {
constructor(x,y){
var options={
    isStatic: true,
    density: 1.2
}
this.body= Bodies.rectangle(x,y,800,20,options);
this.width=800;
this.height=20;
World.add(world,this.body);
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
angleMode(RADIANS);
fill("violet");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop()
}
}








