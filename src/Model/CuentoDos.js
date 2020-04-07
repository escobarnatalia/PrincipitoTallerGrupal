class Cuento{

    constructor(farol,farolero,principito,luna,sol,planeta,posX,posY){
      this.posX=posX;
      this.posY=posY;
      this.farol=farol;
      this.farolero=farolero;
      this.principito=principito;
      this.luna=luna;
      this.sol=sol;
      this.planeta=planeta;


  }



  getPlaneta(){
      return this.planeta;
  }
  
  setplaneta(planeta){
      this.planeta = planeta;
  }


  getLuna(){
    return this.luna;
}

setLuna(luna){
    this.luna = luna;
}

getSol(){
    return this.sol;
}

setSol(sol){
    this.sol = sol;
}

getFarolero(){
    return this.farolero;
}

setFarolero(farolero){
    this.farolero = farolero;
}


getPrincipito(){
    return this.principito;
}

setPrincipito(principito){
    this.principito = principito;
}


  getFarol(){
    return this.farol;
}

setFarol(farol){
    this.farol = farol;
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