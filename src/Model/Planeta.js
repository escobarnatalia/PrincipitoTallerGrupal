class Planeta extends Espacio {

  constructor(posX, posY) {
    super(posX, posY)

    this.planetPlay = false;
    this.planet = loadImage('./imagenes/planeta.png');
    this.planetaLU = loadImage('./imagenes/planetaILU.png');

    this.planetArray = [];

    for (let i = 0; i < 7; i++) {
      this.planetArray = loadImage('./imagenes/gifPlanet/' + i + '.png');
    }



    ///no funciona image abajo


  }

  pintarPlaneta() {
    if (this.planetPlay == false) {
      image(this.planet, this.posX, this.posY);
    } else {

      image(this.planetArray[frameCount % 7], 0, 400);
      if (frameCount == 7) {
        image(this.planetArray[7], 0, 400);
      }
    }

  }





  alumbrado() {
    image(this.planetaLU, this.posX-25, this.posY-25);
  }


  getPlanetPlay() {
    return this.planetPlay;
  }
  setPlanetPlay(planetPlay) {
    this.planetPlay = this.planetPlay;
  }


}