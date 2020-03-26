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

  



    mouseClick(){

    }    


}