/* class 47 Orangutan Runner
 developer: Haris 
 topics: PhysicsEngine,Inheritence,JSON,API,functions,Arrays,Push() and pop()
*/

//Declare variables for game objects and behaviour indicators(FLAGS)
//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var explorer, explorerImg;
var orangutan, orangutanImg;

var imagePath;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
    explorerImg = loadImage("Forest Ranger.jpg");
    orangutanImg = loadImage("Orangutan.jpg");
    imagePath = loadImage("pathway.jpg");
}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
    var canvas = createCanvas(900, 400);
    userEngine = Engine.create();
    userWorld = userEngine.world;

    explorer = createSprite(50, 350, 40, 50);
    explorer.addImage("explorerImg",explorerImg);
    explorer.scale = 0.1;

    orangutan = createSprite(380 ,60, 40, 60);
    orangutan.addImage("orangutanImg",orangutanImg);
    orangutan.scale = 0.1;
}
//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
    background (imagePath) 
       
    if (keyDown (UP_ARROW)) {
        explorer.velocityY = -7;
    }
    explorer.velocityY = explorer.velocityY + 0.5;
    
    
    drawSprites();
}






/* READING MATERIAL READING MATERIAL READING MATERIAL

JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

The slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

https://www.javascripttutorial.net/web-apis/javascript-translate/

https://www.javascripttutorial.net/web-apis/javascript-rotate/

READING MATERIAL READING MATERIAL READING MATERIAL */