var Televisor = /** @class */ (function () {
    /*prenderApagar(): void {
    if (estaPrendido)
    estaPrendido = false
    else
    estaPrendido = true
    }*/
    function Televisor(paramPrendido, paramVolumen, paramCanal, paramModelo, paramMarca, paramPulgadas) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.pulgadas = paramPulgadas;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    ;
    Televisor.prototype.obtenerVolumen = function () {
        return this.volumenActual;
    };
    ;
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    ;
    return Televisor;
}());
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
var primerTelevisor = new Televisor(true, 45, 67, "BGH", "123", 60);
var segundoTelevisor = new Televisor(false, 44, 64, "BGH", "423", 64);
