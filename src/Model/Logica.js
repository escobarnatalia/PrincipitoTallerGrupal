
let objAlumbrado;


class Logica {

  constructor() {




    this.farolero = new Farolero(340, 150);
    this.principe = new Principe(100, 300);
    this.planeta = new Planeta(200, 300);
    this.farol = new Farol(300, 50);
    this.sol = new Sol(50, 50);
    this.luna = new Luna(570, 50);
    this.star = new Star(-300, 0);


    this.activar = false;




    this.faroleroAlumbrado = false;
    this.validarMovSol = false;
    this.validarMovLuna = false;
    this.validarMovPrincipito = false;

    this.validarFarol = false;
    this.validarSol = false;
    this.validarPlaneta = false;
    this.validarLuna = false;
    this.validarFarolero = false;
    this.validarPrincipe = false;
    this.hablarPrincipe=false;
    this.validarPasos=false;


    /////

    this.nuevo = [];
    this.posXPalabra = 0;
    this.posYPalabra = 0;
    this.cuento;

    this.txtCuento = loadStrings('./data/cuento.txt');
  }

  lecturaCuento() {


    this.cuento = join(this.txtCuento, " ");



    if (this.validarFarol == true) {
      while (this.cuento.includes("farol ")) {
        this.cuento = this.cuento.replace("farol ", "farol ".toUpperCase());

      }
    }

    if (this.validarFarolero == true) {
      while (this.cuento.includes("farolero")) {
        this.cuento = this.cuento.replace("farolero", "farolero".toUpperCase());

      }
    }


    if (this.validarSol == true) {
      while (this.cuento.includes("sol")) {
        this.cuento = this.cuento.replace("sol", "sol".toUpperCase());

      }
    }

    if (this.validarLuna == true) {
      while (this.cuento.includes("luna")) {
        this.cuento = this.cuento.replace("luna", "luna".toUpperCase());

      }
    }

    if (this.validarPlaneta == true) {
      while (this.cuento.includes("planeta")) {
        this.cuento = this.cuento.replace("planeta", "planeta".toUpperCase());

      }
    }
    if (this.validarPrincipe == true) {
      while (this.cuento.includes("principito")) {
        this.cuento = this.cuento.replace("principito", "principito".toUpperCase());

      }
    }





  }










  pintarEspacio() {
    this.star.pintar();
    this.planeta.pintarPlaneta();

    if (this.farol.getCambioFarol() == true) {
      this.sol.pintarSol();
      this.luna.setPosX(570);

    }
    if (this.farol.getCambioFarol() == false) {

      this.luna.pintarLuna();
      this.sol.setPosX(50);
    }


    if (this.validarMovSol == true) {
      this.sol.movimiento();
      if (this.sol.getPosX() + 250 >= 800) {
        this.sol.setPosX(550);

      }
      this.direccion = createVector(this.planeta.getPosX()-this.sol.getPosX() ,0- this.sol.getPosY() );
      this.direccion.normalize();

      this.star.setPosX(this.star.getPosX() + this.direccion.x * 0.5);
      this.planeta.setPosX(this.planeta.getPosX() + this.direccion.x * 0.5);
      this.principe.setPosX(this.principe.getPosX() + this.direccion.x * 0.5);
      this.farol.setPosX(this.farol.getPosX() + this.direccion.x * 0.5);
      this.farolero.setPosX(this.farolero.getPosX() + this.direccion.x * 0.5);





      if (this.planeta.getPosX() + 200 >= 800) {
        this.planeta.setPosX(500);
      }
    }


    if (this.validarMovLuna == true) {
      this.luna.movimiento();
      if (this.luna.getPosX() + 200 >= 800) {
        this.luna.setPosX(640);

      }
      this.direccionLuna = createVector(this.planeta.getPosX()-this.luna.getPosX(), this.planeta.getPosY()-this.luna.getPosY());
      this.direccionLuna.normalize();

      this.star.setPosX(this.star.getPosX() + this.direccionLuna.x * 0.5);
      this.planeta.setPosX(this.planeta.getPosX() + this.direccionLuna.x * 0.5);
      this.principe.setPosX(this.principe.getPosX() + this.direccionLuna.x * 0.5);
      this.farol.setPosX(this.farol.getPosX() + this.direccionLuna.x * 0.5);
      this.farolero.setPosX(this.farolero.getPosX() + this.direccionLuna.x * 0.5);


    }


   



  }

  pintarPersonajes() {


    this.farol.pintarFarol();
    this.farolero.pintarFarolero();
    if(this.validarPasos=true){
      this.principe.pasos(); 
       }
    this.principe.pintarPrincipe();
    this.farolero.hablar();


    if(this.hablarPrincipe==true){
      this.principe.hablar();
    }
    if (this.validarMovPrincipito == true) {

      this.principe.movimiento();

    }
  
  }




  //HABLAR

  hablarFarolero() {
    /////hablar
    if (this.principe.getPosX()==100&&mouseX > this.farolero.getPosX() + 100 && mouseY > this.farolero.getPosY() && mouseX < this.farolero.getPosX() + 250 && mouseY < this.farolero.getPosY() + 250
      && this.farolero.getCambioFarol() == true) {
      this.farolero.setHablarOn(1);
      this.validarFarolero = true;

      return;


    }

    if (this.principe.getPosX()==100&&mouseX > this.farolero.getPosX() && mouseY > this.farolero.getPosY() + 80 && mouseX < this.farolero.getPosX() + 180 && mouseY < this.farolero.getPosY() + 300
      && this.farolero.getCambioFarol() == false) {
      this.farolero.setHablarOn(2);
      this.validarFarolero = true;
      return;


    }






  }
  ////CAMBIO FAROL
  cambiarFarol() {
    if (mouseX > this.farol.getPosX() && mouseY > this.farol.getPosY() && mouseX < this.farol.getPosX() + 70 && mouseY < this.farol.getPosY() + 100
      && this.farol.getCambioFarol() == true) {
      this.farol.setCambioFarol(false);
      this.farolero.setCambioFarol(false);
      this.validarFarol = true;
      this.hablarPrincipe=false;


      ////
      this.star.setPosX(-300);
      this.planeta.setPosX(200);
      this.principe.setPosX(100);
      this.farol.setPosX(300);
      this.farolero.setPosX(340);
      this.sol.setPosX(50);
      this.luna.setPosX(570);
      return;
    }
    if (mouseX > this.farol.getPosX() && mouseY > this.farol.getPosY() && mouseX < this.farol.getPosX() + 70 && mouseY < this.farol.getPosY() + 100 && this.farol.getCambioFarol() == false) {
      this.farol.setCambioFarol(true);
      this.farolero.setCambioFarol(true);


      ///
      this.star.setPosX(-300);
      this.planeta.setPosX(200);
      this.principe.setPosX(100);
      this.farol.setPosX(300);
      this.farolero.setPosX(340);
      this.luna.setPosX(570);
      this.sol.setPosX(50);

      return;
    }
  }


  cambioPlaneta() {
    if (this.principe.getPosX()==100&&mouseX > this.planeta.getPosX() + 100 && mouseY > this.planeta.getPosY() && mouseX < this.planeta.getPosX() + 400 && mouseY < this.planeta.getPosY() + 400) {

      this.planeta.setPlay(true);
      this.validarPlaneta = true;
     

      return;

    }
  }


  movEspacio() {
    if (this.farol.getCambioFarol() == true) {
      if (dist(mouseX, mouseY, this.sol.getPosX() + 50, this.sol.getPosY() + 30) < 100) {
        this.validarMovSol = true;
        this.validarSol = true;
        this.validarPasos=false;
        this.principe.setShowPasos(false);
        this.hablarPrincipe=false;
       
      }
    }
    if (this.farol.getCambioFarol() == false) {
      if (dist(mouseX, mouseY, this.luna.getPosX() + 50, this.luna.getPosY() + 30) < 100) {
        this.validarMovLuna = true;
        this.validarLuna = true;
        this.validarPasos=false;
        this.principe.setShowPasos(false);
        this.hablarPrincipe=false;
      }
    }
  }



  movPersonaje() {
    if (mouseX > this.principe.getPosX() + 100 && mouseY > this.principe.getPosY() && mouseX < this.principe.getPosX() + 200 && mouseY < this.principe.getPosY() + 100) {
      this.validarMovPrincipito = true;
      this.validarPrincipe = true;
      this.validarPasos=true;
      this.principe.setShowPasos(true);
      
    }
  
  }






  //frenar movimiento sol y luna
  frenarMovimiento() {

    if (this.validarMovSol == true && dist(mouseX, mouseY, this.sol.getPosX() + 50, this.sol.getPosY() + 30) < 100) {
      this.validarMovSol = false;
      this.hablarPrincipe=false;
     
      if (this.sol.getPosX() + 50 <= 0) {
        this.sol.setPosX(50);
        this.hablarPrincipe=false;
      }
      if (this.sol.getPosX() + 200 >= 800) {
        this.sol.setPosX(50);
        this.hablarPrincipe=false;
      }
    }

    if (this.validarMovLuna == true && dist(mouseX, mouseY, this.luna.getPosX() + 50, this.luna.getPosY() + 30) < 100) {
      this.validarMovLuna = false;
      this.hablarPrincipe=false;

      if (this.luna.getPosX() + 50 <= 0) {
        this.luna.setPosX(570);
        this.hablarPrincipe=false;
      }
      if (this.luna.getPosX() + 100 >= 800) {
        this.luna.setPosX(570);
        this.hablarPrincipe=false;
      }
    }

  }

  frenarMovimientoPersonaje() {

    if (this.validarMovPrincipito == true &&mouseX > this.principe.getPosX() + 100 && mouseY > this.principe.getPosY() && mouseX < this.principe.getPosX() + 200 && mouseY < this.principe.getPosY() + 100) {
      this.validarMovPrincipito = false;
      
      
    }
      if (this.principe.getPosX() <= 100) {
        this.validarMovPrincipito = false;
        this.hablarPrincipe=false;
        this.principe.setPosX(100);
        this.principe.setPosY(300);
        this.principe.setShowPasos(false);
      }

      if (this.principe.getPosX()+100 >= 500) {
        this.validarMovPrincipito= false;
        this.hablarPrincipe=false;
        this.principe.setPosX(100);
        this.principe.setPosY(300);
        this.principe.setShowPasos(false);
     
      }

      if (this.principe.getPosX() + 100>250 && this.principe.getPosY() >200 ) {
        this.hablarPrincipe=true;
        this.principe.setPaso(0);
      
      }
      if (this.principe.getPosX() + 100>300 && this.principe.getPosY() >200) {
        this.hablarPrincipe=true;
        this.principe.setPaso(1);
      
      }
      if (this.principe.getPosX() + 100>400 && this.principe.getPosY() >200) {
        this.hablarPrincipe=true;
        this.principe.setPaso(2);
      }
      if (this.principe.getPosY()<=200) {
        this.principe.setShowPasos(false);
        this.hablarPrincipe=false;

      }
    
     

    if (this.principe.getPosY()+100 >= 560) {
      this.validarMovPrincipito= false;
      this.hablarPrincipe=false;
      this.principe.setPosX(100);
      this.principe.setPosY(300);
      this.principe.setShowPasos(false);
   
    }


    if (this.principe.getPosY()+100 <= 160) {
      this.hablarPrincipe=false;
      this.validarMovPrincipito= false;
      this.principe.setPosX(100);
      this.principe.setPosY(300);
      this.principe.setShowPasos(false);
   
    }


  
  


  }

  alumbrado() {
    if (mouseX > this.farolero.getPosX() + 100 && mouseY > this.farolero.getPosY() && mouseX < this.farolero.getPosX() + 250 && mouseY < this.farolero.getPosY() + 250) {
      this.farolero.alumbrado();
    }

    if (this.validarMovPrincipito == false && mouseX > this.principe.getPosX() + 100 && mouseY > this.principe.getPosY() && mouseX < this.principe.getPosX() + 200 && mouseY < this.principe.getPosY() + 100) {
      this.principe.alumbrado();
    }


    if (mouseX > this.farol.getPosX() && mouseY > this.farol.getPosY() - 30 && mouseX < this.farol.getPosX() + 70 && mouseY < this.farol.getPosY() + 100) {
      this.farol.alumbrado();
    }
  }

  alumbradoEspacio() {

    if (this.farol.getCambioFarol() == true) {

      if (this.validarMovSol == false && dist(mouseX, mouseY, this.sol.getPosX() + 50, this.sol.getPosY() + 30) < 100) {

        this.sol.alumbrado();

      }
    }


    if (mouseX > this.planeta.getPosX() + 10 && mouseY > this.planeta.getPosY() + 10 && mouseX < this.planeta.getPosX() + 370 && mouseY < this.planeta.getPosY() + 400 && this.planeta.getPlay() == false) {
      this.planeta.alumbrado();
    }



    if (this.farol.getCambioFarol() == false) {

      if (this.validarMovLuna == false && dist(mouseX, mouseY, this.luna.getPosX() + 50, this.luna.getPosY() + 30) < 100) {

        this.luna.alumbrado();
      }
    }
  }


  downloadCuento() {





    if (mouseX > 625 && mouseY > 700 && mouseX < 800 && mouseY < 740) {
      this.nuevo = this.cuento.split(" | .");
      saveStrings(this.nuevo, './data/cuentoNew.txt');

    }

  }

}
