function setup() {
    var myCanvas = createCanvas(800, 250);
    //parent the myCanvas variable to the html element titled “mySketch”
    myCanvas.parent('mySketch');
    noStroke();

}

function draw() {

    background(255); //white bg

    //grey background stripes
    if (mouseIsPressed == true) {
        //winking face circle
        fill("#787878");
        rect(0, 15, 800, 20);
        rect(0, 55, 800, 20);
        rect(0, 95, 800, 20);
        rect(0, 135, 800, 20);
        rect(0, 175, 800, 20);
        rect(0, 215, 800, 20);

        //Happy face appears when mouse is pressed
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
        //        fill("#ffd1c9");
        //        rect(mouseX, 20, 800, 20);
        //        rect(mouseY, 60, 800, 20);
        //        rect(mouseX, 100, 800, 20);
        //        rect(mouseY, 140, 800, 20);
        //        rect(mouseX, 180, 800, 20);
        //        rect(mouseY, 220, 800, 20);

        fill("#ffd1c9");
        rect(mouseX, 15, 800, 20);
        rect(mouseY, 55, 800, 20);
        rect(mouseX, 95, 800, 20);
        rect(mouseY, 135, 800, 20);
        rect(mouseX, 175, 800, 20);
        rect(mouseY, 215, 800, 20);

        //grey rectangles respond to mouse position
        //        fill("#787878");
        //        rect(0, 0, mouseX, 20);
        //        rect(0, 40, mouseY, 20);
        //        rect(0, 80, mouseX, 20);
        //        rect(0, 120, mouseY, 20);
        //        rect(0, 160, mouseX, 20);
        //        rect(0, 200, mouseY, 20);

        fill("#787878");
        rect(0, 15, mouseX, 20);
        rect(0, 55, mouseY, 20);
        rect(0, 95, mouseX, 20);
        rect(0, 135, mouseY, 20);
        rect(0, 175, mouseX, 20);
        rect(0, 215, mouseY, 20);


    }

}