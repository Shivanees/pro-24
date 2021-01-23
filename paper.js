class paper{
	constructor(x,y)
	{
		x=50,
		y=50  
		this.image = loadImage("paper.png");
		World.add(world, this.body);
	}
	display()
	{
		push()
		translate(posLeft.x, posLeft.y);
		rectMode(CENTER)
		strokeWeight(4);
		angleMode(RADIANS)
		fill(255)
		rotate(this.angle)
	    rect(50,50,20,300);
        pop()
	}
}