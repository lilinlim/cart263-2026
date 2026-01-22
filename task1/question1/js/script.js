let circle = {
    x: 200,
    y: 200,
    size: 100,
    fill: 200,
    
};

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(100);

    push();
    noStroke();
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);
    pop();

    push();
    noStroke();
    fill(circle.fill + 30);
    ellipse(circle.x + 100, circle.y + 100, circle.size + 50);
    pop();

    push();
    noStroke();
    fill(circle.fill + 50);
    ellipse(circle.x + 300, circle.y + 300, circle.size + 100);
    pop();
}