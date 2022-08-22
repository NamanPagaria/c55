const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var bg_img;
var blocks;
var blocks2,blocks3,blocks4, blocks5;


function preload()
{
  bg_img = loadImage('GamingBackground.png');


}

function setup(){
 
    createCanvas(3000,800);
    engine = Engine.create();
  world = engine.world;

  ground=new Ground(600,600,1600,10);
  blocks= new Blocks(600,100,50,50);
  blocks2=new Blocks(700,100,50,50);
  blocks3= new Blocks(800,100,50,50);
}

function draw(){
    background(bg_img);
    Engine.update(engine);
  ground.show();
  blocks.show();
  blocks2.show();
  blocks3.show();

}