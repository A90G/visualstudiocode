"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var persona_1 = require("./persona");
// clase Entrenador
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(pNombre, pApellido, pEdad, pPlantel) {
        var _this = _super.call(this, pNombre, pApellido, pEdad) || this;
        _this.plantel = pPlantel;
        return _this;
    }
    /*public getPlantel(): void {
      return this.plantel;
    }*/
    Entrenador.prototype.setPlantel = function (pPlantel) {
        this.plantel = pPlantel;
    };
    Entrenador.prototype.entrenar = function (futbolista) {
        for (var i = 0; i < this.plantel.length; i++) {
            if (futbolista.getNombre() === this.plantel[i].getNombre()) {
                this.plantel[i].setEstadoFisico(100);
                return ("Futbolista ".concat(futbolista.getNombre(), " est\u00E1 entrenado"));
            }
        }
        return ("Futbolista ".concat(futbolista.getNombre(), " falt\u00F3 al entrenamiento"));
    };
    return Entrenador;
}(persona_1.Persona));
exports.Entrenador = Entrenador;
