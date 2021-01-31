class Rubber {
    constructor(radius, width, height) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1,
          
          
      }
      this.body = Bodies.circle(radius, width, height, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };