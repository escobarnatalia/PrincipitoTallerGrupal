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




}