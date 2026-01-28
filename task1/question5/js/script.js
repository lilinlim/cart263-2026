let square = {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
    fill: "#FF8C00",
    filled: "#FFD580"
}

let r = 50;
let alpha = 50;
let counter = 0;

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(100);

    drawSquare();
    
    if ((mouseX > 50) && (mouseX < 100) &&
    (mouseY > 50) && (mouseY < 100)) {
        square.fill = square.filled;
    } else {
        square.fill = "#FF8C00";
    }

    let i = 0;
    if(counter >=i && counter <=10){
        let currentR = r;
        let currentAlpha = alpha;
        while(i < counter){
            fill(255, currentAlpha);
            noStroke();
            ellipse(width/2, height/2, currentR, currentAlpha);
            currentR += 20;
            currentAlpha += 20;
            i++;
        }
    }
}

function drawSquare() {
    push();
    noStroke();
    fill(square.fill);
    rect(square.x, square.y, square.w, square.h);
    pop();
}

function mouseClicked(){
    if ((mouseX > 50) && (mouseX < 100) &&
    (mouseY > 50) && (mouseY < 100)) {
        counter = counter + 1;
        console.log(counter);
    }
}