class Personaje{

    constructor(app,posX,posY){
        this.app=app;
 
    this.posX=posX;
    this.posY=posY;
  


    }

    getPosX(){
        return this.pos.x;
    }
    getPosY(){
        return this.pos.y;
    }
    setPosX(posX){
        this.posX = posX;
    }
    setPosY(posY){
        this.posY = posY;
    }
   

}