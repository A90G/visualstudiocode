class Televisor {

    public estaPrendido: boolean;
    public volumenActual: number;
    public canalActual: number;
    public modelo: string;
    public marca: string;
    public pulgadas: number;

    /*prenderApagar(): void {
    if (estaPrendido)
    estaPrendido = false
    else
    estaPrendido = true
    }*/

    constructor(paramPrendido: boolean, paramVolumen: number, paramCanal: number, paramModelo: string, paramMarca: string, paramPulgadas: number) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.pulgadas = paramPulgadas;
    }

    prenderApagar(): void {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };

    obtenerVolumen(): number {
        return this.volumenActual;
    };

    subirVolumen(): void {
        this.volumenActual = this.volumenActual++;
    };

}

/*    subirVolumen(): void {
volumenActual = volumenActual + 1
}
bajarVolumen(): void {
volumenActual = volumenActual - 1
}
subirCanal(): void {
canalActual = canalActual + 1
}
bajarCanal(): void {
canalActual = canalActual - 1
}
*/
let primerTelevisor = new Televisor(true, 45, 67, "BGH", "123", 60);
let segundoTelevisor = new Televisor(false, 44, 64, "BGH", "423", 64);