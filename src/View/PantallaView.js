class PantallaView{

    constructor(){
    this.pantallaController=new PantallaController();
    this.star=loadImage('./imagenes/stars.png')
    

    }






    pintarView(){
       
       
        this.pantallaController.pintar();
        this.pantallaController.text();

    }

    pintarViewEspacio(){
        image(this.star,0,0);
        this.pantallaController.pintarEspacio();
        }


    alumbrado(){
        this.pantallaController.objAlumbrado();
    }




  

    pintarEstrellas(){
        
    }


    textoView(){
        this.pantallaController.textDownload();
    }


    validarClicks(){
        
       
        this.pantallaController.interacciones();
    }

    validarEspacio(){
        
    }




}