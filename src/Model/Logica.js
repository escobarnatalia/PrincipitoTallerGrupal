
let objAlumbrado;


class Logica {

  constructor() {
    

 

    this.farolero = new Farolero(340,150);
    this.principe = new Principe(100,300);
    this.planeta = new Planeta(200,300);
    this.farol = new Farol(300,50);
    this.sol = new Sol(50,50);
    this.luna = new Luna(570,50);

    this.objAlumbrado=0;

    





    this.faroleroAlumbrado=false;


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
    if(this.validarMovLuna == true){
      this.luna.movimiento();

    }

    
   
    
  }

  pintarPersonajes() {
    this.principe.pintarPrincipe();
    this.farol.pintarFarol();

    if (this.faroleroAlumbrado=true){
     
     }else{

     }
  

    this.farolero.pintarFarolero();
    this.farolero.hablar();
   


   }




  //HABLAR

   hablarFarolero(){   
    /////hablar
    if (mouseX>this.farolero.getPosX()+100 && mouseY>this.farolero.getPosY()&&mouseX<this.farolero.getPosX()+250&&mouseY<this.farolero.getPosY()+250
    &&this.farolero.getCambioFarol()==true ){
      this.farolero.setHablarOn(1);
      return;

    
    }

    if (mouseX>this.farolero.getPosX() && mouseY>this.farolero.getPosY()+80&&mouseX<this.farolero.getPosX()+180&&mouseY<this.farolero.getPosY()+300
    &&this.farolero.getCambioFarol()==false){
      this.farolero.setHablarOn(2);
      return;
     
   
    }
////quitar
    
    if (mouseX>this.farolero.getPosX()+100 && mouseY>this.farolero.getPosY()&&mouseX<this.farolero.getPosX()+250&&mouseY<this.farolero.getPosY()+250
){
      print("fuckyou");
      
    
      return;
    }
  




   }
////CAMBIO FAROL
   cambiarFarol(){
    if ( mouseX>this.farol.getPosX() && mouseY>this.farol.getPosY()&&mouseX<this.farol.getPosX()+70&&mouseY<this.farol.getPosY()+100
    &&this.farol.getCambioFarol()==true ){
      this.farol.setCambioFarol(false);
      this.farolero.setCambioFarol(false);  
      return;
    }
    if (mouseX>this.farol.getPosX() && mouseY>this.farol.getPosY()&&mouseX<this.farol.getPosX()+70&&mouseY<this.farol.getPosY()+100&&this.farol.getCambioFarol()==false ){
      this.farol.setCambioFarol(true);
      this.farolero.setCambioFarol(true);  
      return;
    }
   }



// MOVIMIENTO SOL Y LUNA
  movEspacio() {

    if (dist( mouseX, mouseY,this.sol.getPosX()+50,this.sol.getPosY()+30) < 100 ){
     this.validarMovSol = true;

    }
  

    if (dist( mouseX, mouseY,this.luna.getPosX()+50,this.luna.getPosY()+30) < 100 ){
      this.validarMovLuna = true;
 
     }


  }



  



  alumbrado(){

    ///farolero

   switch(this.objAlumbrado){
     case 0:
     this.farolthing=true;
       this.farolero.alumbrado();
      break;


      case 1:
       

       break;

    case 2:
          this.farol.alumbrado();

      break;
  
       case 3:
        this.luna.alumbrado();
       break;
       
       case 4:
         this.sol.alumbrado();
      break;

         case 5:
           this.principe.alumbrado();
        break;

           case 6:
             this.planeta.alumbrado();

           break;

   }

   
   
  

  
  }


  downloadCuento() {
    
    this.downloadTxt = [this.palabrasClaves];
    
   for(let i=0; i<this.downloadTxt;i++){
    this.downloadTxt[i] = this.palabrasClaves[0];
   }
   

/// crear boton, poner posiciones de el
    // if(mouseX>300 && mouseY>300+80&&mouseX<400&&mouseY<400){
    //   saveStrings(this.downloadTxt, './data/cuentodown.txt');
    // }

  }


 



  getObjAlumbrado(){
    return this.objAlumbrado;
  }
  
  setObjAlumbrado(objAlumbrado){
    this.objAlumbrado=objAlumbrado;

  }






}
