import { Persona } from "./persona";
import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";
import { Entrenador } from "./entrenador";

let jugador1 = new Futbolista("Leonel","Messi",40, 80,"Jugador de Primera");
let jugador2 = new Futbolista("Cristiano","Ronaldo",41, 80,"Jugador de Primera");
let jugador3 = new Futbolista("Luis","Suarez",39, 80,"Suplente");
let jugador4 = new Futbolista("Angel","Di Maria",37, 80,"Jugador de Primera");

//crear un plantel de futbolistas y que el entrenador lo entrene para salir de viaje !!! Idem masajista

let plantel1 = [jugador1, jugador2, jugador3, jugador4];

let entrenador1 = new Entrenador("Diego", "Simeone", 55, plantel1);
let masajista1 = new Masajista("Miguel", "Di Lorenzo", 57, plantel1);

// jugador1.cambiarCategoria();
// jugador2.entrenamientoCompleto();
// jugador3.covid();
//console.log(jugador4.getEstadoFisico());
