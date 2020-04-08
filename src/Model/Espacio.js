class Espacio{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
       
    }

    pintar(){
        
    }

    movimiento(){
        this.posX= mouseX-50;
       
       
        this.posY=this.posY;
        
          
        
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