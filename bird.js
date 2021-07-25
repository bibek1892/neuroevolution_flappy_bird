// Creating a bird using constructor function Bird

function Bird(){

    this.y= height/2;
    this.x=40;

    // adding physics

    this.gravity = 0.6;
    this.lift= -15;
    this.velocity = 0;

    this.show = function(){

        fill(255);
        ellipse( this.x, this.y, 32, 32)
        

    }

    this.up = function(){
        this.velocity += this.lift;

    }

    this.update = function(){

        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

    // To stop bird from falling

        if (this.y > height) {
            this.y= height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y= 0;
            this.velocity = 0;
        }
    
    
    



    }
}