class Farolero extends Personaje{
 

  constructor(posX,posY){
      super(posX,posY);
      this.imagenFarolero = loadImage('./imagenes/faroleroUno.png');
      this.imagenFaroleroDos = loadImage('./imagenes/faroleroDos.png');
      this.cambioFarol=true;
      this.cambioHablar=true;
      this.hablarOn=0;
     
      this.faroleroLU=loadImage('./imagenes/faroleroUnoILU.png');
      this.faroleroDosLU=loadImage('./imagenes/faroleroDosILU.png');
  }

  pintarFarolero(){
  if(this.cambioFarol==true){
    image(this.imagenFarolero,this.posX,this.posY);
  }else{
    image(this.imagenFaroleroDos,this.posX,this.posY);
  }
 
   
   
  }

   alumbrado(){
    if(this.cambioFarol==true){
    image(this.faroleroLU,this.posX-5,this.posY-20);
   
   }else{
    image(this.faroleroDosLU,this.posX-20,this.posY-15);
   }


  }





  hablar(){
   
    textSize(45);
  

    switch(this.hablarOn){
      case 1: 
     
      if(this.cambioFarol==true){
        fill(192, 214, 250,50);
        noStroke();
        rect(this.posX+230,this.posY,200,50, 20);
        fill(252, 180, 78);
        text("Buenos dias",this.posX+230,this.posY+40);   
      }else{

      }
    
       break;

       case 2:

      if(this.cambioFarol==false){
        fill(192, 214, 250,50);
        noStroke();
        rect(this.posX+148,this.posY+10,240,50, 20);
        fill(166, 190, 255)
        text("Buenas noches",this.posX+150,this.posY+50);  
       }else{

 }

      break;

      case 3:
        
      break;

    }
   
    
  }

  // if(this.cambioHablar==true){
  // }
 

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

getHablarOn(){
  return this.HablarOn;
}
setHablarOn(hablarOn){
  this.hablarOn = hablarOn;
}











}