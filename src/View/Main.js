
let pantalla, pantallaDownload, pantallaTitle;
let bg, screen;
let faroleroChange;
let logica;
let sound;
let soundPlay;




function preload() {

  sound = loadSound('./data/song.mp3');
    

}
function setup() {
    createCanvas(800, 800);
    screen = 1;
    bg = loadImage('./imagenes/background.png');
    pantalla = new PantallaView();
    pantallaTitle = new PantallaUnoView();
    pantallaDownload = new PantallaFinalView();
    controller = new PantallaController();

    soundPlay=false;







}

function draw() {
    background(0);
    image(bg, 0, 0);
    


    switch (screen) {
        case 0:

            pantallaTitle.pintarTitulo();
            break;
        case 1:
            controller.alumbradoEspacio();
            pantalla.pintarViewEspacio();



            controller.alumbrado();
            pantalla.pintarView();
          



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
if(dist(mouseX,mouseY,300,300)<100){
    sound.play();
}

if(dist(mouseX,mouseY,100,100)<100){
    sound.stop();
}
   
        
    

  
    pantalla.validarClicks();
    pantalla.validarEspacio();
    pantalla.textoView();


}
function mouseReleased() {

    pantalla.validarFrenado();

}


function mouseDragged() {




}