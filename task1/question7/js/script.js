let shapeSize = 80;
let space = 100;
let circleFill = {
    r: 255,
    g: 182,
    b: 193
}

let squared = false;

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(255);
    rectMode(CENTER);

    drawShape();
}

function keyPressed(){
    if (keyCode === 32){
        circleFill.r = random(255);
        circleFill.g = random(255);
        circleFill.b = random(255);
    }
}

function drawShape(){
    fill(circleFill.r, circleFill.g, circleFill.b);
    noStroke();

    for (let y = space; y < height; y += space){
        for (let x = space; x < width; x += space){
            if (squared === true){
                rect(x, y, shapeSize, shapeSize);
            } else {
                circle(x, y, shapeSize);
            }
        }

    }
}

function mouseClicked(){
    for (let y = space; y < height; y += space){
        for (let x = space; x < width; x += space){
            if (squared === true){
                squared = false;
            } else {
            squared = true;
        }
        }
    }

}