class PantallaView{

    constructor(){
    this.pantallaController=new PantallaController();
    

    }

    pintarView(){
        this.pantallaController.pintar();
        this.pantallaController.text();
    }

    textoView(){
        this.pantallaController.textDownload();
    }


    validarClicks(){
        this.pantallaController.validarInteraccion();
        this.pantallaController.cambiarFarolero();
        this.pantallaController.validanteMovimiento();
        this.pantallaController.cambiarFarol();
    }

    validarEspacio(){
        this.pantallaController.validanteMovimientoEspacio();
    }




}