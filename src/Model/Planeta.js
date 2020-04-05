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
      image(this.planet, 200, 300);
    } else {

      image(this.planetArray[frameCount % 5], 0, 400);
      if (frameCount == 5) {
        image(this.planetArray[5], 0, 400);
      }
    }

  }





  alumbrado() {
    image(this.planetaLU, this.posX, this.posY);
  }


  getPlanetPlay() {
    return this.planetPlay;
  }
  setPlanetPlay(planetPlay) {
    this.planetPlay = this.planetPlay;
  }


}