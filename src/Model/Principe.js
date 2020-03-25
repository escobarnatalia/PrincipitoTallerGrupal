class Principe extends Personaje{

    constructor(posX,posY){
      
        super(posX, posY);

    
         this.imagenPrincipe = loadImage('./imagenes/principe.png');
    }

    pintarPrincipe(){
     image(this.imagenPrincipe,100,300);
     
    }

    movPrincipe(){
        
    }
}