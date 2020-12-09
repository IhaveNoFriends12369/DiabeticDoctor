class polygon{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    }
    
    
    display(){
        this.image = loadImage(polygon.png);
           World.add(world, this.body);
           push()
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop()
      
      
      
      };
}