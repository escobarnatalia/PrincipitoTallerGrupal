class Sol extends Espacio{
    constructor(posX,posY){
        super(posX,posY);
        this.solImg=loadImage('./imagenes/sol.png');
       
        
    }
    pintarSol(){
        image(this.solImg,this.posX,this.posY);
        
        
    }


   



    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    setPosX(posX){
        this.posX = posX;
    }
    setPosY(posY){
        this.posY = posY;
    }
  


}