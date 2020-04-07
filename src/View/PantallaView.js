class PantallaView {

    constructor() {
        this.pantallaController = new PantallaController();
       

    }






    pintarView() {


        this.pantallaController.pintar();
        this.pantallaController.text();

    }

    pintarViewEspacio() {
        
        this.pantallaController.pintarEspacio();
    }


    alumbrado() {
        this.pantallaController.objAlumbrado();
    }






    pintarEstrellas() {

    }


    textoView() {
        this.pantallaController.textDownload();
    }


    validarClicks() {


        this.pantallaController.interacciones();
    }

    validarFrenado() {

        this.pantallaController.frenarInteracciones();
    }


    validarEspacio() {

    }




}