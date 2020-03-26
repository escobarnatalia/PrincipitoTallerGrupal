class Farolero extends Personaje{
 

    constructor(posX,posY){
        super(posX,posY);
        this.imagenFarolero = loadImage('./imagenes/faroleroUno.png');
        this.imagenFaroleroDos = loadImage('./imagenes/faroleroDos.png');
        this.cambioFarol=0;
    }

    pintarFarolero(){
      switch(this.cambioFarol){
        case 0:
        image(this.imagenFarolero,340,150);
        break;
        case 1:
          image(this.imagenFaroleroDos,340,150);
          break;

      }
     
     
    }


   

    getCambioFarol(){
      return this.cambio.farol;
  }
  setCambioFarol(cambioFarol){
      this.cambioFarol = cambioFarol;
  }
  


}