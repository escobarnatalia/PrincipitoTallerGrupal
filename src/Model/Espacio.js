class Espacio{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.clickObj=false;
    }

    pintar(){
        
    }

    movimiento(){
        this.posX= mouseX;
        this.posY=this.posY;
        // if(this.clickObj==true){
        //     this.posX= mouseX;
        // }else{
        //     this.posX= posX;
        //     this.posY=posY;
        // }
        
          
        
    }

    getClickObj(){
        return this.clickObj;
    }
    setClickObj(clickObj){
        this.clickObj = clickObj;
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