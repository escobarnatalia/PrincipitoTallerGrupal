class Farolero extends Personaje{

    constructor(posX,posY){
        super(posX,posY);
        this.imagenFarolero = loadImage('./imagenes/faroleroUno.png');
    }

    pintarFarolero(){
      image(this.imagenFarolero,300,200);
     
    }


    cambioFarolero(){
      
    }


}