var Auto = /** @class */ (function () {
    function Auto(paramPrendido, paramCombustible, paramVelocidad, paramModelo, paramMarca) {
        this.estaPrendido = paramPrendido;
        this.velocidadActual = paramVelocidad;
        this.combustibleActual = paramCombustible;
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    ;
    Auto.prototype.obtenerVelocidad = function () {
        return this.velocidadActual;
    };
    ;
    Auto.prototype.cargarCombustible = function () {
        this.combustibleActual = this.combustibleActual++;
    };
    ;
    return Auto;
}());
var X5 = new Auto(true, 70, 67, "BMW", "X5");
