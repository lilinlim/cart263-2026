let square = {
    x: 0,
    y: 0,
    w: 200,
    h: 600,
    fill: "#FFCCE5",
    filled: "#FFF"
}

let square2 = {
    x: 200,
    y: 0,
    w: 200,
    h: 600,
    fill: "#F5B5D5",
    filled: "#FFF"
}

let square3 = {
    x: 400,
    y: 0,
    w: 200,
    h: 600,
    fill: "#E868A8",
    filled: "#FFF"
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(100);
    drawSquare1();

    if ((mouseX > 0) && (mouseX < 200)) {
        square.fill = square.filled;
    } else {
        square.fill = "#FFCCE5";
    }

    if ((mouseX > 200) && (mouseX < 400)) {
        square2.fill = square2.filled;
    } else {
        square2.fill = "#F5B5D5";
    }

    if ((mouseX > 400) && (mouseX < 600)) {
        square3.fill = square3.filled;
    } else {
        square3.fill = "#E868A8";
    }
}

function drawSquare1() {
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
