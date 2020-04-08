class Planeta extends Espacio {

  constructor(posX, posY) {
    super(posX, posY)

    this.play = false;
     
    this.planet = loadImage('./imagenes/planeta.png');
    this.planetaLU = loadImage('./imagenes/planetaILU.png');
 
    this.planetArray = [7];
    this.estado = 0;
    for (let i = 0; i < 6; i++) {
      this.planetArray[i] = loadImage('./imagenes/gifPlanet/' +(i+1) + '.png');
  }

  }

     

   

  pintarPlaneta(){
    if(this.play==false){
      image(this.planet,this.posX, this.posY);
    }else{
      image(this.planetArray[this.estado], this.posX, this.posY);
      if(frameCount %6 == 0){
        this.estado++;
    }
    if(this.estado == 6){
        this.estado=0;
        this.play=false;
    }
      
    }
    
   
  }
 
 
  
  
  alumbrado() {
    image(this.planetaLU, this.posX-25, this.posY-25);
  }


  


  getPlay() {
    return this.play;
  }
  setPlay(play) {
    this.play = play;
  }



 
  /* image(this.planetArray[frameCount % 7], 0, 400);
      if (frameCount == 7) {
        image(this.planetArray[7], 0, 400);
      }*/
    }
