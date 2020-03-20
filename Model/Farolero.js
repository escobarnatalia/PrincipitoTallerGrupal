class Farolero extends Personaje{

    constructor(posX,posY){
        super(posX,posY);
      

    
    
    this.imagenFarolero = loadImage('./imagenes/farolero.png');
    

    }

    pintarFarolero(){
        image(this.imagenFarolero);

    }


}