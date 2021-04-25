class Mango {
	constructor(x,y,r){
		var options={
			isStatic:true,
			restitution:0,
			friction:1
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
       this.image1 = loadImage("sprites/mango.png")
       this.image2 = loadImage("sprites/mango.png")
       this.image3 = loadImage("sprites/mango.png")
       this.image4 = loadImage("sprites/mango.png")
       this.image5 = loadImage("sprites/mango.png")
       this.image6 = loadImage("sprites/mango.png")
       this.image7 = loadImage("sprites/mango.png")
       this.image8 = loadImage("sprites/mango.png")
       this.image9 = loadImage("sprites/mango.png")
       this.image10 = loadImage("sprites/mango.png")
       
	}
	display(){
	
        image(this.image1,850,350,40,60);	
        image(this.image2,1100,320,40,60);	
        image(this.image3,1040,300,40,60);	
        image(this.image4,900,300,40,60);	
        image(this.image5,1060,200,40,60);	
        image(this.image6,980,270,40,60);	
        image(this.image7,900,200,40,60);	
        image(this.image8,980,150,40,60);	
        image(this.image9,800,250,40,60);	
        image(this.image10,1150,250,40,60);	

		if(isTouching(stone,Mango)){
			isStatic:false
		  }
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER);
			//image(this.image, 0,0,this.r)
			ellipse(0,0,this.r, this.r);
			pop()

			
	}
}
