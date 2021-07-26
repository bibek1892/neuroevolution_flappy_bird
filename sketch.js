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

    for( var i= pipes.length-1; i>0; i--){

        pipes[i].show();
        pipes[i].update();

    
        if (pipes[i].hits(bird)){            //collision detection

            console.log("HITS");

            
        }                  


        if (pipes[i].offscreen()){

            pipes.splice(i,1);
        }
    }


    bird.update();
    bird.show();

    // pipes show on every 100 frame

    if (frameCount % 100 ==0){
     pipes.push(new Pipe());
    }

}
    // game works when key is pressed; keyPressed() function in p5 library

function keyPressed(){

    if (key == ' '){

        // console.log("SPACE");
        bird.up();
   }

}