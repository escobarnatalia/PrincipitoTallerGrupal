class Principe extends Personaje{

    constructor(posX,posY){
      
        super(posX, posY);

    
         this.imagenPrincipe = loadImage('./imagenes/principito.png');
         this.principeLU=loadImage('./imagenes/principeILU.png');
    }

    pintarPrincipe(){
     image(this.imagenPrincipe,this.posX,this.posY);
     
    }

    movPrincipe(){
        
        
    }

    alumbrado(){
        image(this.principeLU,this.posX-15,this.posY-5);
    }




}