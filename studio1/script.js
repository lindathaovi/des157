function setup() {
    var myCanvas = createCanvas(800, 250);
    //parent the myCanvas variable to the html element titled “mySketch”
    myCanvas.parent('mySketch');
    noStroke();

}

function draw() {

    background(255); //white bg

    //Happy face appears when mouse is pressed
    if (mouseIsPressed == true) {
        //winking face circle
        fill("#ffd1c9");
        ellipse(width / 2, height / 2, 200, 200);
        //winking face
        noStroke();
        textSize(60);
        fill("#000000")
        textAlign(CENTER, CENTER);
        text("◕‿↼", width / 2, height / 2);
    } else {

        //pink rectangles respond to mouse position
        fill("#ffd1c9");
        rect(mouseX, 0, 800, 20);
        rect(mouseY, 40, 800, 20);
        rect(mouseX, 80, 800, 20);
        rect(mouseY, 120, 800, 20);
        rect(mouseX, 160, 800, 20);
        rect(mouseY, 200, 800, 20);

        //grey rectangles respond to mouse position
        fill("#787878");
        rect(0, 0, mouseX, 20);
        rect(0, 40, mouseY, 20);
        rect(0, 80, mouseX, 20);
        rect(0, 120, mouseY, 20);
        rect(0, 160, mouseX, 20);
        rect(0, 200, mouseY, 20);


    }

}