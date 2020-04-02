
let pantalla, pantallaDownload, pantallaTitle;
let bg, screen;
let faroleroChange;
let logica;





function preload() {

}
function setup() {
    createCanvas(800, 800);
    screen = 1;
    bg = loadImage('./imagenes/background.png');
    pantalla = new PantallaView();
    pantallaTitle = new PantallaUnoView();
    pantallaDownload = new PantallaFinalView();
    controller = new PantallaController();

    



}

function draw() {
    background(0);
    image(bg, 0, 0);

    switch (screen) {
        case 0:

            pantallaTitle.pintarTitulo();
            break;
        case 1:
            pantalla.pintarView();
            break;
        case 2:
            pantallaDownload.pintarView();


            break;
    }





}


function mouseClicked() {
    /*
    if (screen == 2 && dist(mouseX, mouseY, 600, 660) < 100) {
        pantalla.textoView();
        return;

    }
*/

}

function mousePressed() {

    pantalla.validarClicks();
    pantalla.validarEspacio();
    

}
function mouseReleased(){

    
}


function mouseDragged(){

  
    
   
}