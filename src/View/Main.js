
let pantalla;
let pantallaFinal;
let bg;
let screen;





function preload() {

}
function setup() {
    createCanvas(800, 800);
     screen=1;
    bg=loadImage('./imagenes/background.png');
    pantalla = new PantallaView();
    pantallaTitle = new PantallaDosView();
}

function draw() {
    background(0);
    image(bg,0,0);
  
    switch(screen){
        case 0 :
            
    // pantallaTitle.pintarTitulo();
        break;
        case 1 :
            pantalla.pintarView();
            break;
      case 2 :

      break;
    }



   
   
}
