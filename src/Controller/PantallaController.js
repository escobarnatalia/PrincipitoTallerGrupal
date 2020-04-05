class PantallaController{

    constructor(){
     this.logica=new Logica();

     


    }

    pintar(){
       
   this.logica.pintarPersonajes();
         
   }

   pintarEspacio(){
    this.logica.pintarEspacio();
   }

   text(){
       this.logica.lecturaCuento();
      
   }

   textDownload(){
    this.logica.downloadCuento();
   }


  
  
interacciones(){
    this.logica.validarInteraccion();
    this.logica.movEspacio();
    this.logica.hablarFarolero();
    this.logica.cambiarFarol();
}


frenarInteracciones(){
    this.logica.frenarMovimiento();
}


   alumbrado(){
       this.logica.alumbrado();
   }

  objAlumbrado(){
      return this.logica.getObjAlumbrado();
  }










}