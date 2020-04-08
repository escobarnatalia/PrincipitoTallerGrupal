class PantallaView {

    constructor() {
        this.pantallaController = new PantallaController();
        this.botonGuardar = loadImage('./imagenes/guardarBien.png');
        this.botonGuardarLU = loadImage('./imagenes/guardar.png');



    }



    pintarGuardar() {

        image(this.botonGuardar, 625, 715, 150, 35);
        if (mouseX > 625 && mouseY > 700 && mouseX < 800 && mouseY < 740) {
            image(this.botonGuardarLU, 625, 715, 150, 35);
        }


    }

    pintarView() {


        this.pantallaController.pintar();
        this.pantallaController.text();

    }

    pintarViewEspacio() {

        this.pantallaController.pintarEspacio();
    }


    alumbrado() {
        this.pantallaController.alumbradoEspacio();
    }

    alumbradoPersonaje(){
        this.pantallaController.alumbrado();
    }
  


    validarClicks() {
        this.pantallaController.textDownload();
        this.pantallaController.interacciones();
    }

    validarFrenado() {

        this.pantallaController.frenarInteracciones();
    }







}