class Principe extends Personaje {

    constructor(posX, posY) {

        super(posX, posY);


        this.imagenPrincipe = loadImage('./imagenes/principito.png');
        this.pasitos=loadImage('./imagenes/foot.png');
        this.principeLU = loadImage('./imagenes/principeILU.png');
        this.paso=0;
        this.showPasos=false;
    }

    pintarPrincipe() {
        image(this.imagenPrincipe, this.posX, this.posY);

    }

    
    movimiento() {
        this.posX = mouseX-140;

        this.posY= mouseY-50;


    }

    pasos(){
        if(this.showPasos==true){
            image(this.pasitos,350,500);
            image(this.pasitos,400,600);
            image(this.pasitos,500,500); 
        }else{

        }
        
    }


    hablar(){
        textSize(30);
        fill(192, 214, 250,200);
        noStroke();
         rect(this.posX-8,this.posY-30,155,50, 20);
        fill(255, 134, 54)
        switch(this.paso){
            case 0:
  
                text("Primer Paso",this.posX,this.posY);

            break;

            case 1:
               
                text("Segundo Paso",this.posX,this.posY);

            break;

            case 2:
               
                text("Tercer Paso",this.posX,this.posY);

            break;
        }
        
    }

    
    alumbrado() {
        image(this.principeLU, this.posX - 15, this.posY - 5);
    }



    getPaso() {
        return this.paso;
    }
    setPaso(paso) {
        this.paso = paso;
    }

    getShowPasos() {
        return this.showPasos;
    }
    setShowPasos(showPasos) {
        this.showPasos = showPasos;
    }


}