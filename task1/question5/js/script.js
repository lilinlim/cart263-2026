let square = {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
    fill: "#FF8C00",
    filled: "#FFD580"
}

let r = 50;

let circle = {
    x: width / 2,
    y: height / 2,
    size: r
}

let counter = 0;

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(100);

    drawSquare();
    drawCircle();
    
    if ((mouseX > 50) && (mouseX < 100) &&
    (mouseY > 50) && (mouseY < 100)) {
        square.fill = square.filled;
    } else {
        square.fill = "#FF8C00";
    }
}

function drawSquare() {
    push();
    noStroke();
    fill(square.fill);
    rect(square.x, square.y, square.w, square.h);
    pop();
}

function drawCircle(){
    push();
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
    pop();
}

function mouseClicked(){
    if ((mouseX > 50) && (mouseX < 100) &&
    (mouseY > 50) && (mouseY < 100)) {
        counter = counter + 1;
        console.log(counter);
    }
}