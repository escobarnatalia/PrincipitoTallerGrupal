let farolero,principe;

class Logica{
  
    constructor(app){
        this.app=app;
        this.farolero = new Farolero(this,0,0);
        this.principe = new Principe(this,0,0);


    }



    pintarPersonajes(){
        this.farolero.pintarFarolero();
        this.principe.pintarPrincipe();

     }


}