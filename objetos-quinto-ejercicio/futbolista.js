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
exports.Futbolista = void 0;
var persona_1 = require("./persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(pNombre, pApellido, pEdad, pEstadoFisico, pCategoria) {
        var _this = _super.call(this, pNombre, pApellido, pEdad) || this;
        _this.estadoFisico = pEstadoFisico;
        _this.categoria = pCategoria;
        return _this;
    }
    Futbolista.prototype.setEstadoFisico = function (pEstadoFisico) {
        this.estadoFisico = pEstadoFisico;
    };
    Futbolista.prototype.getEstadoFisico = function () {
        if (this.estadoFisico === 0) {
            throw new Error("persona no calificada");
        }
        return this.estadoFisico;
    };
    Futbolista.prototype.setCategoria = function (pCategoria) {
        this.categoria = pCategoria;
    };
    Futbolista.prototype.getCategoria = function () {
        return this.categoria;
    };
    Futbolista.prototype.entrenar = function () {
        this.estadoFisico += 10;
    };
    Futbolista.prototype.entrenamientoCompleto = function () {
        if (this.estadoFisico >= 90) {
            console.log('Me voy a dar un masaje');
        }
        else {
            console.log('Continuaré entrenando...');
        }
    };
    Futbolista.prototype.cambiarCategoria = function () {
        if (this.categoria === "Jugador de Primera") {
            this.categoria = "Suplente";
        }
        else {
            this.categoria = "Jugador de Primera";
        }
    };
    Futbolista.prototype.covid = function () {
        if (this.estadoFisico <= 40) {
            this.estadoFisico + -20;
            console.log("El jugador es COVID positivo deberá realizar cuarentena");
        }
    };
    return Futbolista;
}(persona_1.Persona));
exports.Futbolista = Futbolista;
