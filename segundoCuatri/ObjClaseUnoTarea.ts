class Auto {
    public estaPrendido: boolean;
    public velocidadActual: number;
    public combustibleActual: number;
    public modelo: string;
    public marca: string;

    constructor(paramPrendido: boolean, paramCombustible: number, paramVelocidad: number, paramModelo: string, paramMarca: string) {
        this.estaPrendido = paramPrendido;
        this.velocidadActual = paramVelocidad;
        this.combustibleActual = paramCombustible;
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
    prenderApagar(): void {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };

    obtenerVelocidad(): number {
        return this.velocidadActual;
    };

    cargarCombustible(): void {
        this.combustibleActual = this.combustibleActual++;
    };

}

let X5 = new Auto(true, 70, 67, "BMW", "X5");
