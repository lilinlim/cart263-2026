let square = {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
    fill: "#FFCCE5"
}

let square2 = {
    x: 200,
    y: 200,
    w: 100,
    h: 100,
    fill: "#F5B5D5"
}

let square3 = {
    x: 50,
    y: 50,
    w: 100,
    h: 100,
    ySpeed: 1,
    fill: "#E868A8"
}

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(100);

    drawSquare();

    if (mouseIsPressed) {
        square.x = square.x + 10;
    }

    if (keyIsPressed) {
        if (keyCode === 32) {
            square2.y = square2.y + 10;
        }
    }

    square3.y += square3.ySpeed

    if(square3.y === 700){
        square3.y = 0;
    }
}

function drawSquare() {
    push();
    noStroke();
    fill(square.fill);
    rect(square.x, square.y, square.w, square.h);
    pop();

    push();
    noStroke();
    fill(square2.fill);
    rect(square2.x, square2.y, square2.w, square2.h);
    pop();

    push();
    noStroke();
    fill(square3.fill);
    rect(square3.x, square3.y, square3.w, square3.h);
    pop();
}
