let farolero,principe,planeta;

class Logica{
  
    constructor(){
        
        this.farolero = new Farolero(0,0);
        this.principe = new Principe(0,0);
        this.planeta = new Planeta();
        this.farol= new Farol();


    }



    pintarEspacio(){
        this.planeta.pintarPlaneta();
        
      
     }

    pintarPersonajes(){
        this.farol.pintarFarol();
        this.farolero.pintarFarolero();
        this.principe.pintarPrincipe();
        

     }


}