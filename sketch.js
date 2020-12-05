const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird;
var bgimg;

function preload(){
    bgimg = loadImage("sprites/bg.png");
}



function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(1100,500,90,90);
    pig1 = new Pig(1230,500);
    box2 = new box(1360,500,90,90);
    log1 = new Log(1230,400,380,PI/2);

    box3 = new box(1100,350,90,90);
    pig2 = new Pig(1230,350);
    box4 = new box(1360,350,90,90);
    log2 = new Log(1230,300,380,PI/2);

    log3 = new Log(1230,200,150,-PI/5)
    box5 = new box(1230,200,90,90);
    log4 = new Log(1230,200,150,PI/5)

    bird = new Bird(100,100);

    ground = new Ground(750,height,1500,20)

    Bird1 = new bird1(10,10,70,70);

}

function draw(){
    background(bgimg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
    Bird1.display();
}