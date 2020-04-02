class PantallaController{

    constructor(){
     this.logica=new Logica();

     


    }

    pintar(){
        this.logica.pintarEspacio();
         this.logica.pintarPersonajes();
         
   }

   text(){
       this.logica.lecturaCuento();
      
   }

   textDownload(){
    this.logica.downloadCuento();
   }


   validanteMovimiento(){
      
       this.logica.validanteCambio();

   }

   validanteMovimientoEspacio(){
    this.logica.movEspacio();

   }


    cambiarFarolero(){
       this.logica.hablarFarolero();
      
   }
   cambiarFarol(){
   
    this.logica.cambiarFarol();
}


   validarInteraccion(){
       this.logica.validarInteraccion();
   }
  



    mouseClick(){

    }    


}