const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;



function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    

    block1 = new Block(200,100,70,20);
    fill("white");
    block2 = new Block(400,100,70,20);
    block3 = new Block(600,100,70,20);
    block4 = new Block(300,200,70,20);
    block5 = new Block(500,200,70,20);
    block6 = new Block(400,300,70,20);
}

function draw(){
    background("black");
    Engine.update(engine);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    

}