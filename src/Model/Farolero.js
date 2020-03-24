class Farolero extends Personaje{

    constructor(app,posX,posY){
        super(app,posX,posY);
   
      

    
    
    this.imagenFarolero = this.app.loadImage('./imagenes/farolero.png');
    

    }

    pintarFarolero(){
        this.app.image(this.imagenFarolero);

    }


}