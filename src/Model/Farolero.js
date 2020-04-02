class Farolero extends Personaje{
 

  constructor(posX,posY){
      super(posX,posY);
      this.imagenFarolero = loadImage('./imagenes/faroleroUno.png');
      this.imagenFaroleroDos = loadImage('./imagenes/faroleroDos.png');
      this.cambioFarol=true;
      this.cambioHablar=true;
  }

  pintarFarolero(){
  if(this.cambioFarol==true){
    image(this.imagenFarolero,this.posX,this.posY);
  }else{
    image(this.imagenFaroleroDos,this.posX,this.posY);
  }
 

    // switch(this.cambioFarol){
    //   case 0:
    //   image(this.imagenFarolero,this.posX,this.posY);
    //   break;

    //   case 1:
    //     image(this.imagenFaroleroDos,this.posX,this.posY);
    //     break;

    // }
   
   
  }

  hablar(){
    textSize(20);
    fill(255,0,0);
    if(this.cambioHablar==true){
   text("buenas dias",this.posX,this.posY);   
    }else{
      text("buenas noches",this.posX,this.posY);  
    }
  }


 

  getCambioFarol(){
    return this.cambioFarol;
}
setCambioFarol(cambioFarol){
    this.cambioFarol = cambioFarol;
}
getCambioHablar(){
  return this.cambioHablar;
}
setCambioHablar(cambioHablar){
  this.cambioHablar = cambioHablar;
}




}