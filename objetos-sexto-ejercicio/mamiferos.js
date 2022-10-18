"use strict";
exports.__esModule = true;
exports.Mamiferos = void 0;
var Mamiferos = /** @class */ (function () {
    function Mamiferos(pId, pAlimentacion, pTipoAlimento) {
        this.ID = pId;
        this.alimentacion = pAlimentacion;
        this.tipoAlimento = pTipoAlimento;
    }
    /*cada get con su set para practicar*/
    Mamiferos.prototype.getId = function () {
        return this.ID;
    };
    Mamiferos.prototype.setId = function (pId) {
        return this.ID = pId;
    };
    Mamiferos.prototype.getAlimentacion = function () {
        return this.alimentacion;
    };
    Mamiferos.prototype.setAlimentacion = function (pAlimentacion) {
        return this.alimentacion = pAlimentacion;
    };
    Mamiferos.prototype.getTipoAlimento = function () {
        return this.tipoAlimento;
    };
    Mamiferos.prototype.setTipoAlimento = function (pTipoAlimento) {
        return this.tipoAlimento = pTipoAlimento;
    };
    Mamiferos.prototype.comer = function (kgs) {
        if (this.alimentacion >= kgs) {
            console.log("Puede alimentar al animal");
        }
        else {
            console.log("Recalcule los kgs de alimento");
        }
    };
    return Mamiferos;
}());
exports.Mamiferos = Mamiferos;
