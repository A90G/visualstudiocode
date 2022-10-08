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
exports.Hervivoro = void 0;
var mamiferos_1 = require("./mamiferos");
var Hervivoro = /** @class */ (function (_super) {
    __extends(Hervivoro, _super);
    function Hervivoro(pId, pAlimentacion, pTipoAlimento) {
        var _this = _super.call(this, pId, pAlimentacion) || this;
        _this.tipoAlimento = pTipoAlimento;
        return _this;
    }
    Hervivoro.prototype.getTipoAlimento = function () {
        return this.tipoAlimento;
    };
    Hervivoro.prototype.setTipoAlimento = function (pTipoAlimento) {
        return this.tipoAlimento = pTipoAlimento;
    };
    Hervivoro.prototype.comer = function (kgs) {
        if (this.alimentacion >= kgs) {
            console.log("Puede alimentar al animal con el tipo de hoja que prefiera");
        }
        else {
            console.log("Recalcule los kgs de hojas");
        }
    };
    return Hervivoro;
}(mamiferos_1.Mamiferos));
exports.Hervivoro = Hervivoro;
