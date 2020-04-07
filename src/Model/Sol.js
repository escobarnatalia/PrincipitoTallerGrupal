class Sol extends Espacio{
    constructor(posX,posY){
        super(posX,posY);
        this.solImg=loadImage('./imagenes/sol.png');
        this.solLU=loadImage('./imagenes/solILU.png');

       
        
    }
    pintarSol(){
        image(this.solImg,this.posX,this.posY);
        
        
    }

    alumbrado(){
        image(this.solLU,this.posX-13,this.posY-13);
    }





  


}