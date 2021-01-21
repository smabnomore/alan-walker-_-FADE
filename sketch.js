const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var polygon;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    block1 = new Block(700,320,70,70);

    block2 = new Block();
    block3 = new Block(700,320,70,70);
    block4 = new Block(700,320,70,70);
    block5 = new Block(700,320,70,70);
    block6 = new Block(700,320,70,70);
    block7 = new Block(700,320,70,70);
    block8 = new Block(700,320,70,70);
    block8 = new Block(700,320,70,70);
block9 = new Block(700,320,70,70);
block10 = new Block(700,320,70,70);
block11 = new Block(700,320,70,70);
block12 = new Block(700,320,70,70);
block13 = new Block(700,320,70,70);
block14 = new Block(700,320,70,70);
block15 = new Block(700,320,70,70);
block16 = new Block(700,320,70,70);
 
 polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.polygon,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);    
    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
