class Farolero extends Personaje{

    constructor(app,posX,posY){
        super(app,posX,posY);
        this.imagenFarolero = loadImage('./imagenes/farolero.png');
    }

    pintarFarolero(){
      //image(this.imagenFarolero);
      ellipse(200,100,100,100);
    }


}