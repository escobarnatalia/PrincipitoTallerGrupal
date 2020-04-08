class PantallaController {

    constructor() {
        this.logica = new Logica();




    }

    pintar() {

        this.logica.pintarPersonajes();

    }

    pintarEspacio() {
        this.logica.pintarEspacio();
        this.logica.cambioPlaneta2();
    }

    text() {
        this.logica.lecturaCuento();

    }

    textDownload() {
        this.logica.downloadCuento();
    }

    interacciones() {

        this.logica.movEspacio();
        this.logica.hablarFarolero();
        this.logica.cambiarFarol();
        this.logica.cambioPlaneta();
    }


    clic() {
        this.logica.validarInteraccion();
    }


    frenarInteracciones() {
        this.logica.frenarMovimiento();
    }


    alumbrado() {
        this.logica.alumbrado();
    }

    alumbradoEspacio() {
        this.logica.alumbradoEspacio();
    }











}