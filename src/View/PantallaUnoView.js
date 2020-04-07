let titulo;
class PantallaUnoView {

    constructor() {
       this.inicio = loadImage('./imagenes/inicio.jpg');
       this.alumbradoILU = loadImage('./imagenes/leerILU.png');


    }

    pintarInicio() {
        image(this.inicio, 0, 0);
        
    }

    pintarAlumbrado() {

        if (mouseX > 260  && mouseY > 485  && mouseX <524  && mouseY < 556 ) {
            image(this.alumbradoILU, 263, 490);
        }
        

    } 



}