
let objAlumbrado;


class Logica {

  constructor() {




    this.farolero = new Farolero(340, 150);
    this.principe = new Principe(100, 300);
    this.planeta = new Planeta(200, 300);
    this.farol = new Farol(300, 50);
    this.sol = new Sol(50, 50);
    this.luna = new Luna(570, 50);
    this.star= new Star(-300,0);
    





    this.faroleroAlumbrado = false;


    /////

    this.palabras = [];
    this.palabrasClaves = [];
    this.guiaClaves = [];
    this.posXPalabra = 0;
    this.posYPalabra = 0;

    this.txtCuento = loadStrings('./data/cuento.txt');
  }

  lecturaCuento() {

    for (let i = 0; i < this.txtCuento.length; i++) {
      this.palabras = this.txtCuento[i].split(" ");



      for (let i = 0; i < this.palabras.length; i++) {
        switch (this.palabras[i]) {
          case "farol":
            this.palabrasClaves[0] = new Cuento(this.palabras[i], 300, 50);
            //  print(this.palabrasClaves[0]);
            break;
          case "principe":
            this.palabrasClaves[1] = new Cuento(this.palabras[i], 100, 300);
            break;
          case "farolero":
            this.palabrasClaves[2] = new Cuento(this.palabras[i], 340, 150);
            // textSize(200);
            // text(this.palabrasClaves[2].getPalabraC(),this.palabrasClaves[2].getPosX(),this.palabrasClaves[2].getPosY());
            break;
          case "planeta":
            this.palabrasClaves[3] = new Cuento(this.palabras[i], 200, 300);
            break;
          case "sol":
            this.palabrasClaves[4] = new Cuento(this.palabras[i], 50, 50);

            break;
          case "luna":
            this.palabrasClaves[5] = new Cuento(this.palabras[i], 570, 50);
            // print(this.palabrasClaves[5]);

            break;


        }


      }

    }

  }




   movimientoEstellas(){
     

    // this.direccion=new PVector(this.sol.getPosX()-this.star.getPosX(),this.sol.getPosY()-this.star.getPosY());
    // this.direccion.normalize();
    // this.star.setPosX(this.star.getPosX()+this.direccion.x*3);

   }







  validarInteraccion() {

    for (let i = 0; i < this.palabrasClaves.length; i++) {
      if (dist(mouseX, mouseY, this.palabrasClaves[2].getPosX(), this.palabrasClaves[2].getPosY()) < 100) {


      }
    }

  }

  pintarEspacio() {
    this.star.pintar();

     this.planeta.pintaGif();

    //this.planeta.pintarPlaneta();

    if (this.farol.getCambioFarol() == true) {
      this.sol.pintarSol();
      this.luna.setPosX(570) ;
      
    }
    if (this.farol.getCambioFarol() == false) {
      this.luna.pintarLuna();
      this.sol.setPosX(50);
    }

    if (this.validarMovSol == true) {
      this.sol.movimiento();
      this.direccion=createVector(this.sol.getPosX()-this.star.getPosX(),this.sol.getPosY()-this.star.getPosY());
      this.direccion.normalize();
      
      this.star.setPosX(this.star.getPosX()+this.direccion.x*1);
      this.planeta.setPosX(this.planeta.getPosX()+this.direccion.x*1);


     

    }
    if (this.validarMovLuna == true) {
      this.luna.movimiento();

    }

  if(this.sol.getPosX()<=50){
    this.star.setPosX(-300);
    this.planeta.setPosX(200);
  }

  }

  pintarPersonajes() {
    this.principe.pintarPrincipe();
    this.farol.pintarFarol();

    if (this.faroleroAlumbrado = true) {

    } else {

    }


    this.farolero.pintarFarolero();
    this.farolero.hablar();



  }




  //HABLAR

  hablarFarolero() {
    /////hablar
    if (mouseX > this.farolero.getPosX() + 100 && mouseY > this.farolero.getPosY() && mouseX < this.farolero.getPosX() + 250 && mouseY < this.farolero.getPosY() + 250
      && this.farolero.getCambioFarol() == true) {
      this.farolero.setHablarOn(1);
      return;


    }

    if (mouseX > this.farolero.getPosX() && mouseY > this.farolero.getPosY() + 80 && mouseX < this.farolero.getPosX() + 180 && mouseY < this.farolero.getPosY() + 300
      && this.farolero.getCambioFarol() == false) {
      this.farolero.setHablarOn(2);
      return;


    }
    ////quitar

    if (mouseX > this.farolero.getPosX() + 100 && mouseY > this.farolero.getPosY() && mouseX < this.farolero.getPosX() + 250 && mouseY < this.farolero.getPosY() + 250
    ) {
      print("fuckyou");


      return;
    }





  }
  ////CAMBIO FAROL
  cambiarFarol() {
    if (mouseX > this.farol.getPosX() && mouseY > this.farol.getPosY() && mouseX < this.farol.getPosX() + 70 && mouseY < this.farol.getPosY() + 100
      && this.farol.getCambioFarol() == true) {
      this.farol.setCambioFarol(false);
      this.farolero.setCambioFarol(false);
      return;
    }
    if (mouseX > this.farol.getPosX() && mouseY > this.farol.getPosY() && mouseX < this.farol.getPosX() + 70 && mouseY < this.farol.getPosY() + 100 && this.farol.getCambioFarol() == false) {
      this.farol.setCambioFarol(true);
      this.farolero.setCambioFarol(true);
      return;
    }
  }

  //cambio planeta
  cambioPlaneta() {
    if (this.planeta.getPlanetPlay == false && dist(mouseX, mouseY, this.planeta.getPosX() + 75, this.planeta.getPosY + 75) < 200) {

      this.planeta.setPlanetPlay(true);
    }
  }

  pararPlaneta() {
    if (this.planeta.getPlanetPlay == true && dist(mouseX, mouseY, this.planeta.getPosX() + 75, this.planeta.getPosY + 75) < 200) {

      this.planeta.setPlanetPlay(false);
    }
  }


  // MOVIMIENTO SOL Y LUNA
  movEspacio() {

    if (dist(mouseX, mouseY, this.sol.getPosX() + 100, this.sol.getPosY() + 30) < 100) {
      this.validarMovSol = true;
     
  

    }


    if (dist(mouseX, mouseY, this.luna.getPosX() + 200, this.luna.getPosY() + 30) < 100) {
      this.validarMovLuna = true;

    }


  }

  //frenar movimiento sol y luna
  frenarMovimiento() {

    if (this.validarMovSol == true && dist(mouseX, mouseY, this.sol.getPosX() + 50, this.sol.getPosY() + 30) < 100) {
      this.validarMovSol = false;
      if (this.sol.getPosX() + 50 < 0) {
        this.sol.setPosX(50);
      }
      if (this.sol.getPosX() > 800) {
        this.sol.setPosX(50);
      }
    }

    if (this.validarMovLuna == true && dist(mouseX, mouseY, this.luna.getPosX() + 50, this.luna.getPosY() + 30) < 100) {
      this.validarMovLuna = false;

      if (this.luna.getPosX() + 50 < 0) {
        this.luna.setPosX(570);
      }
      if (this.luna.getPosX() > 800) {
        this.luna.setPosX(570);
      }
    }

  }

  alumbrado() {
    if (mouseX > this.farolero.getPosX() + 100 && mouseY > this.farolero.getPosY() && mouseX < this.farolero.getPosX() + 250 && mouseY < this.farolero.getPosY() + 250){
      this.farolero.alumbrado();
    }

    if (mouseX > this.principe.getPosX() +100 && mouseY > this.principe.getPosY() && mouseX < this.principe.getPosX() +200 && mouseY < this.principe.getPosY() + 100){
      this.principe.alumbrado();
    }


    if (mouseX > this.farol.getPosX()&& mouseY > this.farol.getPosY()-30 && mouseX < this.farol.getPosX() + 70 && mouseY < this.farol.getPosY() + 100){
      this.farol.alumbrado();
    }




  }

  alumbradoEspacio(){

  
    if (mouseX>this.planeta.getPosX()+10&& mouseY>this.planeta.getPosY()+10&&mouseX<this.planeta.getPosX()+370&& mouseY<this.planeta.getPosY()+400){
      this.planeta.alumbrado();
    }  
    if (mouseX>this.sol.getPosX()+10&& mouseY>this.sol.getPosY()+10&&mouseX<this.sol.getPosX()+370&& mouseY<this.sol.getPosY()+250&&this.farol.getCambioFarol()==true){
      this.sol.alumbrado();
    }
    if (mouseX>this.luna.getPosX()+10&& mouseY>this.luna.getPosY()+10&&mouseX<this.luna.getPosX()+370&& mouseY<this.luna.getPosY()+200){
      this.luna.alumbrado();
    }

   





  }


  downloadCuento() {

    this.downloadTxt = [this.palabrasClaves];

    for (let i = 0; i < this.downloadTxt; i++) {
      this.downloadTxt[i] = this.palabrasClaves[0];
    }


    /// crear boton, poner posiciones de el
    // if(mouseX>300 && mouseY>300+80&&mouseX<400&&mouseY<400){
    //   saveStrings(this.downloadTxt, './data/cuentodown.txt');
    // }

  }






  






}
