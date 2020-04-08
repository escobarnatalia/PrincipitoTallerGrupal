class Personaje {

    constructor(posX, posY) {

        this.posX = posX;
        this.posY = posY;



    }

    movimiento() {
        this.posX = mouseX;

        this.posY = this.posY;

    }


    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }


}