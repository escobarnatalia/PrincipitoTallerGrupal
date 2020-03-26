let cuento,guia;
let array;

class Logica {

    constructor() {

        this.validarPlaneta = false;
        this.validarFarolero = false;
        this.validarPrincipito = false;
        this.validarFarol = false;



        this.farolero = new Farolero(0, 0);
        this.principe = new Principe(0, 0);
        this.planeta = new Planeta();
        this.farol = new Farol();
        this.sol = new Sol();
        this.luna = new Luna();


        this.cuento = loadStrings('./data/cuento.txt');
        
        // this.cuentosplit = split(this.cuento,',');

     
 
        
      

    }


    cuentoCosa(){
        ///no sirve
        for(let i = 0; i < cuento.length; i++){
          this.guia = this.cuento.split("a");
        

         
        }
    }

    lecturaCuento() {

    //    print(this.cuento);

       
       
     
       

        // for (i = 0; i < cuento.length; i++) {
        //     guiaCuento = cuento[i].split(" ");
        // }


    //     for (i = 0; i < cuento.length; i++) {
    //          guiaCuento = cuento[i].split(" ");

    //         if (guiaCuento[0].equals("farolero")) {
    //             this.validarFarolero = true;
    //         }

    //         if (guiaCuento[0].equals("principito")) {
    //             this.validarPrincipito = true;
    //         }

    //         if (guiaCuento[0].equals("farol")) {
    //             this.validarFarol = true;
    //         }

    //         if (guiaCuento[0].equals("planeta")) {
    //             this.validarPlaneta = true;
    //         }
    //     }
      }




      downloadCuento(){
        saveStrings(this.cuento, './data/cuentodown.txt');
      }

    pintarEspacio() {

        this.planeta.pintarPlaneta();
        this.sol.pintarSol();
        this.luna.pintarLuna();
       

        // if (this.validarPlaneta = true) {
        //     this.planeta.pintarPlaneta();
        // }

    }

    pintarPersonajes() {
        this.principe.pintarPrincipe();
        this.farol.pintarFarol();
        this.farolero.pintarFarolero();

        
        // if (this.validarFarol == true) {
        //     this.farol.pintarFarol();
        // }
        // if (this.validarFarolero == true) {
        //     this.farolero.pintarFarolero();
        // }
        // if (this.validarPrincipito == true) {
        //     this.principe.pintarPrincipe();
        // }

    }




}