function setup() {
    createCanvas(700, 700);
    background(100);

    drawEllipse(100, 100, 100, 100, 255, 0, 0);
    drawEllipse(200, 200, 100, 100, 255, 0, 0);
    drawEllipse(300, 300, 100, 100, 255, 0, 0);
}

function draw() {

}

function drawEllipse(x,y,w,h,r,g,b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}