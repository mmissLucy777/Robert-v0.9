class RobertBaseClass{
//PROPIEDADES
    constructor(x, y, width, height){
        //Opciones
        var options = {
           'frictionAir': 1,  //Resistencia a la fricción del aire (Default: 0.01)
  
          
        }
        //Atributos
        this.width=width;
        this.height=height;
       this.body = Bodies.rectangle(x,y,20,20,options);
        this.image = loadImage('Sprites/normalHeadsRobert.png'); //Cabeza normal de Robertz

        World.add(world, this.body);
        
    }//Fin constructor

//FUNCIONES
    display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image, 100,450,this.width, this.height);
        pop();
    }//Fin display()

    
Jump(){
    this.body.position.y = this.body.position.y -10;
}//Fin Jump()

}//Fin BaseClassRobertz


/*constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.sling1 = loadImage('sprites/sling1.png');
            this.sling2 = loadImage('sprites/sling2.png');
            this.sling3 = loadImage('sprites/sling3.png');
            this.pointB = pointB
            this.sling = Constraint.create(options);
            World.add(world, this.sling);
            
            display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }*/