const Engine = Matter.Engine;  //Asignación para la biblioteca del Motor
const World = Matter.World;     //Asignación para la biblioteca del Mundo
const Bodies = Matter.Bodies;   //Asignación para la biblioteca de los Cuerpos
const Constraint = Matter.Constraint;   //Asignación para la biblioteca de los Cuerpos Restringidos

var engine, world
var RobertNormalHead, RobertBodyPartsChest, RobertJointsArmL1, RobertJointsLeg1, RobertJointsArmR1, RobertJointsLegR2;         

function setup(){
    //createCanvas(displayWidth, displayHeight);
    createCanvas(400,610);
    engine = Engine.create();   //Crea un motor y lo asigan a engine
    world = engine.world;       //Agrega el mundo al motor 'engine'

    //Cabeza Robert
    RobertNormalHead = new RobertNormal(50,10);   //Cabeza normal de Robert
    
    //Cuerpo Robert
    RobertBodyPartsChestL = new RobertBodyParts(40,50); //Pecho de Robert
    RobertBodyPartsChestR = new RobertBodyParts(60,50);
    RobertBodyPartsChestL2 = new RobertBodyParts(40,70);
    RobertBodyPartsChestR2 = new RobertBodyParts(60,70);//
    RobertBodyPartsChestL3 = new RobertBodyParts(40,90); //
    RobertBodyPartsChestR3 = new RobertBodyParts(60,90); //
    RobertBodyPartsChestL4 = new RobertBodyParts(40,110);//
    RobertBodyPartsChestR4 = new RobertBodyParts(60,110);//

    //Brazos Robert
    RobertBodyPartsArmL1 = new RobertBodyParts(20,45); //Brazos de Robert
    RobertBodyPartsArmL2 = new RobertBodyParts(0,40);
    RobertBodyPartsArmR1 = new RobertBodyParts(80,45);
    RobertBodyPartsArmR2 = new RobertBodyParts(100,40);

    //Piernas Robert
    RobertBodyPartsLegL1 = new RobertBodyParts(20,117); //Piernas de Robert
    RobertBodyPartsLegL2 = new RobertBodyParts(0,125);
    RobertBodyPartsLegR1 = new RobertBodyParts(80,117);
    RobertBodyPartsLegR2 = new RobertBodyParts(100,125);
    
    //Articulaciones Robert
    RobertJointsArmL1 = new RobertJoints(RobertBodyPartsArmL2.body, RobertBodyPartsArmL1.body); //Articulación brazo izquierdo
    RobertJointsLegL1 = new RobertJoints(RobertBodyPartsLegL2.body, RobertBodyPartsLegL1.body); //Articulación pierna izquierda
    RobertJointsArmR1 = new RobertJoints(RobertBodyPartsArmR1.body, RobertBodyPartsArmR2.body); //Articulación brazo derecho
    RobertJointsLegR1 = new RobertJoints(RobertBodyPartsLegR1.body, RobertBodyPartsLegR2.body); //Articulaciòn pierna derecha

}//Fin setup()


function draw(){
   background(0);
   //Engine.update(engine);   //Actualiza el motor 'engine' de manera frecuente

   //Cabeza Robert
   RobertNormalHead.display();

   //Cuerpo Robert
   RobertBodyPartsChestL.display();
   RobertBodyPartsChestR.display();
   RobertBodyPartsChestL2.display();
   RobertBodyPartsChestR2.display();
   RobertBodyPartsChestL3.display();
   RobertBodyPartsChestR3.display();
   RobertBodyPartsChestL4.display();
   RobertBodyPartsChestR4.display();
   
   //Brazos Robert
   RobertBodyPartsArmL1.display();
   RobertBodyPartsArmL2.display();
   RobertBodyPartsArmR1.display();
   RobertBodyPartsArmR2.display();
   
   //Piernas Robert
   RobertBodyPartsLegL1.display();
   RobertBodyPartsLegL2.display();
   RobertBodyPartsLegR1.display();
   RobertBodyPartsLegR2.display();

   //Ligamentos Robert
   RobertJointsArmL1.displayArmL1();
   RobertJointsLegL1.displayLegL1();
   //RobertJointsArmR1.displayArmR1();
   //RobertJointsArmR1.displayArmR1();
   //RobertJointsLegR1.displayLegR1();

}//Fin draw()

function keyPressed(){
    if(keyCode === 32){
        //Cabeza Robert
        RobertNormalHead.Jump(RobertNormalHead.body);

        //Cuerpo Robert
        RobertBodyPartsChestL.Jump(RobertBodyPartsChestL.body);
        RobertBodyPartsChestR.Jump(RobertBodyPartsChestR.body);
        RobertBodyPartsChestL2.Jump(RobertBodyPartsChestL2.body);
        RobertBodyPartsChestR2.Jump(RobertBodyPartsChestR2.body);
        RobertBodyPartsChestL3.Jump(RobertBodyPartsChestL3.body);
        RobertBodyPartsChestR3.Jump(RobertBodyPartsChestR3.body);
        RobertBodyPartsChestL4.Jump(RobertBodyPartsChestL4.body);
        RobertBodyPartsChestR4.Jump(RobertBodyPartsChestR4.body);

        //Brazos Robert
        RobertBodyPartsArmL1.Jump(RobertBodyPartsArmL1.body); 
        RobertBodyPartsArmL2.Jump(RobertBodyPartsArmL2.body); 
        RobertBodyPartsArmR1.Jump(RobertBodyPartsArmR1.body);
        RobertBodyPartsArmR2.Jump(RobertBodyPartsArmR2.body);
       
        //Piernas Robert
        RobertBodyPartsLegL1.Jump(RobertBodyPartsLegL1.body); 
        RobertBodyPartsLegL2.Jump(RobertBodyPartsLegL2.body);
        RobertBodyPartsLegR1.Jump(RobertBodyPartsLegR1.body); 
        RobertBodyPartsLegR2.Jump(RobertBodyPartsLegR2.body);
    }//Fin if keyCode 32
}//Fin keyPressed() 
