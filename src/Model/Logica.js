let farolero,principe,planeta,sol,luna,farol;

class Logica{
  
    constructor(){
        
        this.farolero = new Farolero(0,0);
        this.principe = new Principe(0,0);
        this.planeta = new Planeta();
        this.farol= new Farol();
        this.sol= new Sol();
        this.luna= new Luna();


    }



    pintarEspacio(){
        this.planeta.pintarPlaneta();
        this.sol.pintarSol();
        this.luna.pintarLuna();
        
      
     }

    pintarPersonajes(){
        this.farol.pintarFarol();
        this.farolero.pintarFarolero();
        this.principe.pintarPrincipe();
        

     }

     


}