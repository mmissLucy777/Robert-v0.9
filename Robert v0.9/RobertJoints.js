class RobertJoints{ //Articulaciones de Robert
    constructor(bodyA, bodyB){ //Los body vienen de Sketch
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,  //Default 0.04
            length: 30,
            frictionAir: 1 //Reistencia al aire
        }//Fin options

        this.bodyA = bodyA;
        this.RobertJoint1 = Constraint.create(options);
        World.add(world, this.RobertJoint1);        
    }//Fin constructor


        displayArmL1(){
            if(this.RobertJoint1.bodyA){
               if(keyCode === 60){ //Brazo Izquierdo ASCII 60(<), 62(>), 45(-), 95(_)
                console.log("Aqui si pasa XD en 60");
                var pointA = this.RobertJoint1.bodyA.position;
                var pointB = this.RobertJoint1.bodyB.position;
                    push();
                    this.bodyA.position.x = pointA.x -1;
                    pop();
                 }//Fin if KeyCode            
                 
                 else{
                    var pointA = this.RobertJoint1.bodyA.position;
                    var pointB = this.RobertJoint1.bodyB.position;
                         push();
                         this.bodyA.position.x = 0;
                         pop();
                 }
            }//Fin if  this.RobertJoint1.bodyA
        }//Fin displayArmL1

        displayLegL1(){
            if(this.RobertJoint1.bodyA){
               if(keyCode === 62){ //Brazo Izquierdo ASCII 60(<), 62(>), 45(-), 95(_)
                console.log("Aqui si pasa XD en 62");
                var pointA = this.RobertJoint1.bodyA.position;
                var pointB = this.RobertJoint1.bodyB.position;
                    push();
                    this.bodyA.position.x = pointA.x -1;
                    pop();
                 }//Fin if KeyCode            
                 
                 else{
                    var pointA = this.RobertJoint1.bodyA.position;
                    var pointB = this.RobertJoint1.bodyB.position;
                         push();
                         this.bodyA.position.x = 0;
                         pop();
                 }
              
            }//Fin if  this.RobertJoint1.bodyA
        }//Fin displayLegL1

        displayArmR1(){
            if(this.RobertJoint1.bodyA){
               if(keyCode === 45){ //Brazo Izquierdo ASCII 60(<), 62(>), 45(-), 95(_)
                console.log("Aqui si pasa XD en 45");
                //console.log("Posición x: " + this.RobertJoint1.bodyA.position.x);
                var pointA = this.RobertJoint1.bodyA.position;
                var pointB = this.RobertJoint1.bodyB.position;
                    push();
                    this.bodyA.position.x = pointA.x +1;
                    pop();
                 }//Fin if KeyCode            
                 
                 else{
                    var pointA = this.RobertJoint1.bodyA.position;
                    var pointB = this.RobertJoint1.bodyB.position;
                         push();
                         this.bodyA.position.x = 0;
                         pop();
                 }
            }//Fin if  this.RobertJoint1.bodyA
        }//Fin displayArmL1

}//Fin class RobertJoints