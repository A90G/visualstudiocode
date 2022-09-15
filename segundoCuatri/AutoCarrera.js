let readlineSync = require('readline-sync');

let vuelta1 = readlineSync.questionInt("Ingrese tiempo de la vuelta 1: ");
let vuelta2 = readlineSync.questionInt("Ingrese tiempo de la vuelta 2: ");
let vuelta3 = readlineSync.questionInt("Ingrese tiempo de la vuelta 3: ");
let vuelta4 = readlineSync.questionInt("Ingrese tiempo de la vuelta 4: ");

let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVuelta = tiempoTotal / 4;

console.log("El tiempo de la vuelta 1 es:", vuelta1);
console.log("El tiempo de la vuelta 2 es:", vuelta2);
console.log("El tiempo de la vuelta 3 es:", vuelta3);
console.log("El tiempo de la vuelta 4 es:", vuelta4);
console.log("El tiempo total de carrera es:", tiempoTotal);
console.log("El tiempo promedio de vuelta es:", promedioVuelta);