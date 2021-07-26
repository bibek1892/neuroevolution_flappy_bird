
// creating a pipe object with a constructor function

function Pipe(){

    this.top = random(height/2);  // value from top to middle of the screen
    this.bottom = random(height/2); // middle of screen to the bottom
    this.x=width;  // start at the edge of the screen
    this.w=20;
    this.speed = 2;

    this.highlight =  false;

    this.hits = function(bird){

        if(bird.y < this.top || bird.y > height - this.bottom ){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.highlight =  true;
                return true;
            }
             
        }
        this.highlight = false;
        return false;

    }


    this.show = function(){
        fill(255);
        if(this.highlight){
            fill(255,0,0);      //making red if collide
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);

    }

    this.update = function(){

        this.x -= this.speed;

    }

    this.offscreen = function(){

        if(this.x < -this.w){
            return true;
        }
        else{
            return false;
        }


    }

}