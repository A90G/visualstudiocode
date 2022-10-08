"use strict";
exports.__esModule = true;
var futbolista_1 = require("./futbolista");
var masajista_1 = require("./masajista");
var entrenador_1 = require("./entrenador");
var jugador1 = new futbolista_1.Futbolista("Leonel", "Messi", 40, 80, "Jugador de Primera");
var jugador2 = new futbolista_1.Futbolista("Cristiano", "Ronaldo", 41, 80, "Jugador de Primera");
var jugador3 = new futbolista_1.Futbolista("Luis", "Suarez", 39, 80, "Suplente");
var jugador4 = new futbolista_1.Futbolista("Angel", "Di Maria", 37, 80, "Jugador de Primera");
//crear un plantel de futbolistas y que el entrenador lo entrene para salir de viaje !!! Idem masajista
var plantel1 = [jugador1, jugador2, jugador3, jugador4];
var entrenador1 = new entrenador_1.Entrenador("Diego", "Simeone", 55, plantel1);
var masajista1 = new masajista_1.Masajista("Miguel", "Di Lorenzo", 57, plantel1);
jugador1.cambiarCategoria();
jugador2.entrenamientoCompleto();
jugador3.covid();
console.log(jugador4.getEstadoFisico());
console.log(jugador1.getCategoria());
