let cuento, guia;
let array;
let farol2;


class Logica {

  constructor() {

 

    this.farolero = new Farolero(340,150);
    this.principe = new Principe(100,300);
    this.planeta = new Planeta(200,300);
    this.farol = new Farol(300,50);
    this.sol = new Sol(50,50);
    this.luna = new Luna(570,50);





    /////

    this.palabras = [];
    this.palabrasClaves=[];
    this.guiaClaves=[];
    this.posXPalabra=0;
    this.posYPalabra=0;

    this.txtCuento = loadStrings('./data/cuento.txt');
  }  

  lecturaCuento() {

    for (let i = 0; i < this.txtCuento.length; i++) {
      this.palabras = this.txtCuento[i].split(" ");
      
    for (let i = 0; i < this.palabras.length; i++) {
      switch(this.palabras[i]){
        case "farol":
          this.palabrasClaves[0] = new Cuento (this.palabras[i],300,50);
          //  print(this.palabrasClaves[0]);
          break;
        case "principe":
          this.palabrasClaves[1] = new Cuento (this.palabras[i],100,300);
          break;
        case "farolero":
          this.palabrasClaves[2] = new Cuento (this.palabras[i],340,150);
          // textSize(200);
          // text(this.palabrasClaves[2].getPalabraC(),this.palabrasClaves[2].getPosX(),this.palabrasClaves[2].getPosY());
          break;
        case "planeta":
          this.palabrasClaves[3] = new Cuento (this.palabras[i],200,300);
          break;
        case "sol":
          this.palabrasClaves[4] = new Cuento (this.palabras[i],50,50);
           
        break;
        case "luna":
          this.palabrasClaves[5] = new Cuento (this.palabras[i],570,50);
          // print(this.palabrasClaves[5]);
          
          break;
          

      }
      
    
 }
 
      
      
     
         
         
    }
    
//////SI LE DOY CLIC EN POSX DE PALABRAS CLAVES ARRAY DE LUNA DONDE VA LA LUNA SE DEBE MODIFICAR EN EL TXT 



  }



  validarInteraccion(){
  
    for(let i = 0; i < this.palabrasClaves.length; i++){
      if(dist(mouseX,mouseY,this.palabrasClaves[2].getPosX(),this.palabrasClaves[2].getPosY())<100){
        
  
      }
    }
    
  }
 

  pintarEspacio() {

    this.planeta.pintarPlaneta();
    this.sol.pintarSol();
    this.luna.pintarLuna();

 
    if(this.validarMovSol == true){
      this.sol.movimiento();

    }

    
   
    
  }

  pintarPersonajes() {
    this.principe.pintarPrincipe();
    this.farol.pintarFarol();
    this.farolero.pintarFarolero();
    this.farolero.hablar();


  
    
    // if (this.validarPrincipito == true) {
    //     this.principe.pintarPrincipe();
    // }


   }



   hablarFarolero(){
    if (dist( mouseX, mouseY,this.farolero.getPosX()+50,this.farolero.getPosY()) < 100&&this.farolero.getCambioHablar()==true ){
      this.farolero.setCambioHablar(false);
      return;

    
    }
    if (dist( mouseX, mouseY,this.farolero.getPosX()+50,this.farolero.getPosY()) < 100&&this.farolero.getCambioHablar()==false ){
      this.farolero.setCambioHablar(true);
      return;

   
    }

   }

   cambiarFarol(){
    if (dist( mouseX, mouseY,this.farol.getPosX()+50,this.farol.getPosY()) < 100&&this.farol.getCambioFarol()==true ){
      this.farol.setCambioFarol(false);
      this.farolero.setCambioFarol(false);
      
      return;

    
    }
    if (dist( mouseX, mouseY,this.farol.getPosX()+50,this.farol.getPosY()) < 100&&this.farol.getCambioFarol()==false ){
      this.farol.setCambioFarol(true);
      this.farolero.setCambioFarol(true);
      
      return;

   
    }

   }




  movEspacio() {

    if (dist( mouseX, mouseY,this.sol.getPosX()+50,this.sol.getPosY()+30) < 100 ){
     this.validarMovSol = true;

    }

  }

    validanteCambio() {

  //   if (mouseX > this.farolero.posX && mouseX < this.farolero.posX + 150 &&
  //     mouseY > this.farolero.posY && mouseY < this.farolero.posY + 340) {

  //     console.log("si entra");

  //     this.validarCambioFarolero = true;

  //   }

   
  }




  downloadCuento() {
    saveStrings(this.cuento, './data/cuentodown.txt');
  }






}
