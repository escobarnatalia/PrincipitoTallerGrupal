class Farol extends Personaje {
    constructor(posX,posY){
        super(posX,posY);
        this.farolApagado=loadImage('./imagenes/apagado.png');
        this.farolEncendido=loadImage('./imagenes/encendido.png');
        this.cambioFarol=true;
        this.farolLU=loadImage('./imagenes/farolILU.png');
        
    }


    pintarFarol(){
        if(this.cambioFarol==true){
            image(this.farolApagado,this.posX,this.posY);
          }else{
            image(this.farolEncendido,this.posX,this.posY);
          }
       
      
        
    }


    alumbrado(){
        image(this.farolLU,this.posX-20,this.posY-15);
    }








    getCambioFarol(){
        return this.cambioFarol;
    }
    setCambioFarol(cambioFarol){
        this.cambioFarol = cambioFarol;
    }
    


}