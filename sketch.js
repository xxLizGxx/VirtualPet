const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dog2, dog1;
var dog;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
fedTime = database.ref('FeedTime');
fedTime.on("value", function(data))
  lastFed = data.val();
}
  drawSprites();
  Engine.update(engine);
    dog.display();

}
display


