class Star extends Espacio{

constructor(posX,posY){
    super(posX,posY);
    this.star = loadImage('./imagenes/starDos.png')


}



pintar(){
    image(this.star,this.posX,this.posY);

}


}