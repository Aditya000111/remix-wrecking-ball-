const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var slingShot;
var rock1;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(800,320,70,70);
    box2 = new Box(800,320,70,70);
    box3 = new Box(800,240,70,70);
    box4 = new Box(800,240,70,70);
    box5 = new Box(800,160,70,70);
    
    box6 = new Box(850,320,70,70);
    box7 = new Box(850,320,70,70);
    box8 = new Box(850,240,70,70);
    box9 = new Box(850,240,70,70);
    box10 = new Box(850,160,70,70);

    rock1=new Rock(100,100,50);
    


    //bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(rock1.body,{x:220, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ground.display();
    rock1.display();
    

  
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}