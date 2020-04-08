let titulo;
class PantallaUnoView {

    constructor() {
        this.bgInicio = loadImage('./imagenes/bgInicio.png');
       this.boton = loadImage('./imagenes/leer.png');
       this.alumbradoILU = loadImage('./imagenes/leerLu.png');


    }

    pintarInicio() {
        image(this.bgInicio, 0, 0);
        textSize(140);
        fill(250,222,95)
        text("El Principito",60,400);
        image(this.boton, 263, 490);
        
    }

    pintarAlumbrado() {
       

        if (mouseX > 260  && mouseY > 485  && mouseX <524  && mouseY < 556 ) {
            image(this.alumbradoILU, 263, 490);
        }
        

    } 



}