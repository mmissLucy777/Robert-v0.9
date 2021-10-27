class RobertNormal extends RobertBaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.width=60;
        this.height=40;
    }
    display(){
        super.display();
    }

}

/*class Pig extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }*/