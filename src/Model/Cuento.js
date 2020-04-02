class Cuento{

    constructor(palabraC,posX,posY){
      this.posX=posX;
      this.posY=posY;
      this.palabraC=palabraC;


  }



  getPalabraC(){
      return this.palabraC;
  }
  
  setPalabraC(palabraC){
      this.palabraC = palabraC;
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