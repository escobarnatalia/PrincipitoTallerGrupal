
let pantalla, pantallaDownload, pantallaInicio;
let bg, screen;
let faroleroChange;
let logica;
let sound;
let soundPlay;




function preload() {
  


}
function setup() {

    this.sacramento=loadFont('./data/sacramento.ttf')

    createCanvas(800, 800);
    screen = 1;
    bg = loadImage('./imagenes/background.png');
    pantalla = new PantallaView();
    pantallaInicio = new PantallaUnoView();
    
    controller = new PantallaController();

    this.soundPlay=false;
    this.sound = loadSound('./data/song.mp3');
    






}

function draw() {
    textFont('sacramento');
    background(0);
    image(bg, 0, 0);
    


    switch (screen) {
        case 0:
           
            pantallaInicio.pintarInicio();
            pantallaInicio.pintarAlumbrado();
            break;
        case 1:
            controller.alumbradoEspacio();
            pantalla.pintarViewEspacio();



            controller.alumbrado();
            pantalla.pintarView();
             pantalla.pintarGuardar();
          



            break;
        case 2:
            pantallaDownload.pintarView();


            break;
    }



}


function mouseClicked() {
    print(mouseX + " ", mouseY + " ");
    /*
    if (screen == 2 && dist(mouseX, mouseY, 600, 660) < 100) {
        pantalla.textoView();
        return;

    }
*/

}

function mousePressed() {
// if(dist(mouseX,mouseY,300,300)<100){
//     sound.play();
// }

// if(dist(mouseX,mouseY,100,100)<100){
//     sound.stop();
// }

controller.clic();
   
        
    
if(mouseX > 260  && mouseY > 485  && mouseX <524  && mouseY < 556 && screen == 0){
    screen =  1;
}
  
    pantalla.validarClicks();
    pantalla.validarEspacio();
    pantalla.textoView();

    

}
function mouseReleased() {

    pantalla.validarFrenado();

}

