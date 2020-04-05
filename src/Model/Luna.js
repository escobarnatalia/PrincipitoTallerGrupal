class Luna extends Espacio{
    constructor(posX,posY){
        super(posX,posY);
        this.lunaImg=loadImage('./imagenes/luna.png');
        this.lunaLU=loadImage('./imagenes/lunaILU.png');
    }

    pintarLuna(){
        image(this.lunaImg,this.posX,this.posY);
    }

    movimientoLuna(){

    }

    alumbrado(){
        image(this.lunaLU,this.posX,this.posY);
    }




  




}