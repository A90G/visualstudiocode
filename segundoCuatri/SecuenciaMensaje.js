let readlineSync = require('readline-sync');

let num1= readlineSync.questionInt("Ingrese el numero 1: ");
let num2= readlineSync.questionInt("Ingrese el numero 2: ");

let resultado= num1 + num2;

console.log("El resultado de la suma es:", resultado);