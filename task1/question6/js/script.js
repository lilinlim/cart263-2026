let writing = "test";

let numRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numCol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(0);

    writeTest();

    for (var n = 0; n < 10; n++){
        push();
        fill(255);
        textSize(28);
        textAlign(CENTER, CENTER);
        text(numRow[n], 100 * (n + 1) / 2, 50);
        pop();
    }

    for (var n = 0; n < 15; n++){
        push();
        fill(255);
        textSize(28);
        textAlign(CENTER, CENTER);
        text(numCol[n], 50, 50 * (n + 2));
        pop();
    }

}

function writeTest(){
    push();
    fill(255);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("test", width/2, height/2);
    pop();
}