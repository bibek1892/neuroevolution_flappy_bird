
// creating a pipe object with a constructor function

function Pipe(){

    this.top = random(height/2);  // value from top to middle of the screen
    this.bottom = random(height/2); // middle of screen to the bottom
    this.x=width;  // start at the edge of the screen
    this.w=20;
    this.speed = 2;


    this.show = function(){
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);

    }

    this.update = function(){

        this.x -= this.speed;

    }

}