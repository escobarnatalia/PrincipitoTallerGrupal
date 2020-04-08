class Planeta extends Espacio {

  constructor(posX, posY) {
    super(posX, posY)

    this.planetPlay = false;
     
    this.planet = loadImage('./imagenes/planeta.png');
    this.planetaLU = loadImage('./imagenes/planetaILU.png');
 

    this.planetArray = [7];
    this.estado = 0;

    this.planetArray[0] =  loadImage('./imagenes/gifPlanet/0.png');
    this.planetArray[1] =  loadImage('./imagenes/gifPlanet/1.png');
    this.planetArray[2] =  loadImage('./imagenes/gifPlanet/2.png');
    this.planetArray[3] =  loadImage('./imagenes/gifPlanet/3.png');
    this.planetArray[4] =  loadImage('./imagenes/gifPlanet/4.png');
    this.planetArray[5] =  loadImage('./imagenes/gifPlanet/5.png');
    this.planetArray[6] =  loadImage('./imagenes/gifPlanet/6.png');

    


     

    /*for (let i = 0; i < 7; i++) {
      this.planetArray = loadImage('./imagenes/gifPlanet/' + i + '.png');
    }*/

    
   ///no funciona image abajo


  }

  pintarPlaneta(){
    image(this.planetArray[this.estado], 200, 300);
  }
 
 
  
  
    contar(){
  
      if(frameCount %20 == 0){
          this.estado++;
      }
  
      if(this.estado == 6){
          this.estado=0;
      }
     
  }
  
  
  alumbrado() {
    image(this.planetaLU, this.posX-25, this.posY-25);
  }


  getPintarGif() {
    return this.pintarGif;
  }
  setPintarGif(pintarGif) {
    this.pintarGif = this.pintarGif;
  }


  getContar() {
    return this.contar;
  }
  setPintarGif(contar) {
    this.contar = this.contar;
  }

  
  getPintarPlaneta() {
    return this.PintarPlaneta;
  }
  setPintarPlay(PintarPlaneta) {
    this.PintarPlaneta = this.PintarPlaneta;
  }

  getPlanetPlay() {
    return this.planetPlay;
  }
  setPintarPlay(planetPlay) {
    this.planetPlay = this.planetPlay;
  }



 
  /* image(this.planetArray[frameCount % 7], 0, 400);
      if (frameCount == 7) {
        image(this.planetArray[7], 0, 400);
      }*/

}