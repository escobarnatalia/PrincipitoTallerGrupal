let farolero, principe, planeta, cuento;
let validarFarolero, validarPrincipito, validarFarol;
let validarPlaneta;

class Logica {

    constructor() {

        this.validarPlaneta = false;
        this.validarFarolero = false;
        this.validarPrincipito = false;
        this.validarFarol = false;
        this.farolero = new Farolero(0, 0);
        this.principe = new Principe(0, 0);
        this.planeta = new Planeta();
        this.farol = new Farol();
        String cuento[] = loadStrings("./../cuento.txt");


    }

    lecturaCuento() {

        for (i = 0; i < cuento.length; i++) {
            String guiaCuento[] = cuento[i].split(" ");

            if (guiaCuento[0].equals("farolero")) {
                this.validarFarolero = true;
            }

            if (guiaCuento[0].equals("principito")) {
                this.validarPrincipito = true;
            }

            if (guiaCuento[0].equals("farol")) {
                this.validarFarol = true;
            }

            if (guiaCuento[0].equals("planeta")) {
                this.validarPlaneta = true;
            }
        }
    }


    pintarEspacio() {

        if (this.validarPlaneta = true) {
            this.planeta.pintarPlaneta();
        }

    }

    pintarPersonajes() {
        if (this.validarFarol == true) {
            this.farol.pintarFarol();
        }
        if (this.validarFarolero == true) {
            this.farolero.pintarFarolero();
        }
        if (this.validarPrincipito == true) {
            this.principe.pintarPrincipe();
        }

    }


}