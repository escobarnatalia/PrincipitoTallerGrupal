
let pantalla, pantallaInicio;
let bg, screen;
let logica;
let sound;
let mouse,sacramento;





function preload() {
    sound = loadSound('song.mp3');
}
function setup() {
    createCanvas(800, 800);
    sacramento = loadFont('./data/sacramento.ttf');

    mouse = loadImage('./imagenes/mouse.png');
    screen = 0;
    bg = loadImage('./imagenes/background.png');
    pantalla = new PantallaView();
    pantallaInicio = new PantallaUnoView();


}

function draw() {
    textFont('sacramento');
    background(0);
    image(bg, 0, 0);
    cursor('mouse');



    switch (screen) {
        case 0:
            pantallaInicio.pintarInicio();
            pantallaInicio.pintarAlumbrado();
            break;
        case 1:

            pantalla.alumbrado();
            pantalla.pintarViewEspacio();
            pantalla.alumbradoPersonaje();
            pantalla.pintarView();
            pantalla.pintarGuardar();


            break;

    }

}

function mousePressed() {
    if (mouseX > 260 && mouseY > 485 && mouseX < 524 && mouseY < 556 && screen == 0) {
        screen = 1;
        sound.play();
        sound.loop();
        return;
    }

    if (screen == 1) {
        pantalla.validarClicks();
    }


}
function mouseReleased() {
    pantalla.validarFrenado();

}


