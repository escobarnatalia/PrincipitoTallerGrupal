class Sol extends Espacio{
    constructor(posX,posY){
        super(posX,posY);
        this.solImg=loadImage('./imagenes/sol.png');
        
    }
    pintarSol(){
        image(this.solImg,50,50);
        
        
    }
}