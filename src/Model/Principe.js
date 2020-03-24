class Principe extends Personaje{

    constructor(app,posX,posY){
      
        super(app,posX, posY);

    
         this.imagenPrincipe = loadImage('./imagenes/principe.png');
    }

    pintarPrincipe(){
     //image(this.imagenPrincipe);
     rect(100,100,100,100);

    }


}