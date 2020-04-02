class Planeta extends Espacio {

    constructor(posX,posY){
        super(posX,posY)
    
    this.planet=loadImage('./imagenes/planeta.png');
    }
    
    pintarPlaneta(){
        image(this.planet,200,300);
    }
    
    
    
    
    }