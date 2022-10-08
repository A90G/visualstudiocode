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
exports.Masajista = void 0;
var persona_1 = require("./persona");
//clase masajista
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(pNombre, pApellido, pEdad, pPlantel) {
        var _this = _super.call(this, pNombre, pApellido, pEdad) || this;
        _this.plantel = pPlantel;
        return _this;
    }
    /*public getPlantel():string {
      return this.plantel;
    }*/
    Masajista.prototype.setPlantel = function (pPlantel) {
        this.plantel = pPlantel;
    };
    Masajista.prototype.brindarMasaje = function (futbolista) {
        for (var i = 0; i < this.plantel.length; i++) {
            if (futbolista.getNombre() === this.plantel[i].getNombre()) {
                this.plantel[i].setEstadoFisico(100);
                return ("Futbolista ".concat(futbolista.getNombre(), " est\u00E1 relajado y listo para el viaje"));
            }
        }
        return ("Futbolista: ".concat(futbolista.getNombre(), " , revisar Estado F\u00EDsico antes del viaje"));
    };
    return Masajista;
}(persona_1.Persona));
exports.Masajista = Masajista;
