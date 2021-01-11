var canvas;
var music;

var box;
var blue_box, orange_box, red_box, green_box;

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue_box = createSprite(120,580,180,40);
    blue_box.shapeColor = "blue";

    orange_box = createSprite(310,580,180,40);
    orange_box.shapeColor = "orange";

    red_box = createSprite(500,580,180,40);
    red_box.shapeColor = "red";

    green_box = createSprite(690,580,180,40);
    green_box.shapeColor = "green";


    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor="white";
    box.velocityX = 4;
    box.velocityY = 5;   
    
    
}

function draw() {
    background(rgb(169,169,169));

    edges=createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if(blue_box.isTouching(box)&&box.bounceOff(blue_box)){
        box.shapeColor="blue";
    }
    if(orange_box.isTouching(box)&&box.bounceOff(orange_box)){
        box.shapeColor="orange";
    }
    if(red_box.isTouching(box)&&box.bounceOff(red_box)){
        box.shapeColor="red";
    }
    if(green_box.isTouching(box)&&box.bounceOff(green_box)){
        box.shapeColor="green";
    }


    drawSprites();
}
