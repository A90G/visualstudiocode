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
exports.Omnivoro = void 0;
var mamiferos_1 = require("./mamiferos");
var Omnivoro = /** @class */ (function (_super) {
    __extends(Omnivoro, _super);
    function Omnivoro(pId, pAlimentacion, pTipoAlimento) {
        return _super.call(this, pId, pAlimentacion, pTipoAlimento) || this;
    }
    Omnivoro.prototype.comer = function (kgs) {
        if (this.alimentacion >= kgs) {
            console.log("Puede alimentar al animal con carne, pescado, frutas y verduras");
        }
        else {
            console.log("Recalcule los kgs de alimento");
        }
    };
    return Omnivoro;
}(mamiferos_1.Mamiferos));
exports.Omnivoro = Omnivoro;
