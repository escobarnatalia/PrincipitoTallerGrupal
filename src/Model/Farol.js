class Farol{
    constructor(){
        this.farol=loadImage('./imagenes/apagado.png');
        this.farolEncendido=loadImage('./imagenes/encendido.png');
        
    }


    pintarFarol(){
        image(this.farol,300,50);
        image(this.farolEncendido,300,50);
        
    }
}