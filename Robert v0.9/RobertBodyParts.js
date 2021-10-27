class RobertBodyParts extends RobertBaseClass{
    constructor(x,y){
        super(x,y,70,50);
        this.width = 70;
        this.height = 30;
        this.image = loadImage('/Sprites/RobertBodyParts.png');
    }

    display(){
        super.display(); 
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
       
    }

}