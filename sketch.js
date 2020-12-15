const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function setup() {
  var canvas=createCanvas(400,400);

// create the physics engine
  engine=Engine.create();

  // to make a world inside the engine
  world=engine.world;

 /* var object_options={
    isStatic : true
  }

  // to make an object(body) 
  object=Bodies.rectangle(150,50,65,55,object_options);

  // to add the object inside the world
  World.add(world,object) ;

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);*/

var ground_options={
  isStatic : true
}
 ground=Bodies.rectangle(200,390,400,20,ground_options);

 World.add(world,ground);


 var ball_options={
   // add bouciness effect to the ball-property:restitution
   restitution : 1.0
 }

 ball=Bodies.circle(200,100,20,ball_options);

 World.add(world,ball) ;
  
  
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  //rectMode(CENTER);   
  //rect(object.position.x,object.position.y,65,55);

  // TO DISPLAY THE GROUND
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20);

 // to display the ball
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20);
  
}