// Using p5 library

var bird;
var pipes = [];
function setup(){
    createCanvas(400,600);
    bird= new Bird()
    pipes.push(new Pipe());
}

function draw(){

    background(0);
    bird.update();
    bird.show();


    if (frameCount % 100 ==0){
     pipes.push(new Pipe());


    }


    for( var i=0; i< pipes.length; i++){

        pipes[i].show();
        pipes[i].update();
    }


}
    // game works when key is pressed; keyPressed() function in p5 library

function keyPressed(){

    if (key == ' '){

        // console.log("SPACE");
        bird.up();
    }


}