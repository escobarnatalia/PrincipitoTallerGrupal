class Luna extends Espacio{
    constructor(posX,posY){
        super(posX,posY);
        this.lunaImg=loadImage('./imagenes/luna.png');
    }

    pintarLuna(){
        image(this.lunaImg,570,50);
    }


}