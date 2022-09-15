let readlineSync = require('readline-sync');

let base = readlineSync.questionInt("Ingrese base: ");
let altura = readlineSync.questionInt("Ingrese altura: ");

let perimetro = base * altura;

console.log("El perímetro es:", perimetro);