class Principe extends Personaje{

    constructor(app,posX,posY){
      
        super(app,posX, posY);

    
    this.imagenPrincipe = this.app.loadImage('./imagenes/principe.png');
    

    }

    pintarPrincipe(){
      this.app.image(this.imagenPrincipe);

    }


}