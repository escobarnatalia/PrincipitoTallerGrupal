let titulo;
class PantallaUnoView{

    constructor(){
        this.titulo=loadImage('./imagenes/title.png');
    

    }

   pintarTitulo(){
       image(this.titulo,0,50);
   }


}