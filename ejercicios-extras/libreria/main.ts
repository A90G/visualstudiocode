import { Cliente } from "./cliente";
import { Revista } from "./revista";
import { Libro } from "./libro";

let autores = ['Pedro', 'Rosa', 'Juan', 'Araceli'];
let generos = ['Drama', 'Terror', 'Comedia', 'Vaqueros'];

let libro1: Libro = new Libro('Campanita', "50", 200, 45, 'sadfasdasdasdasdsad', "amor");
let libro2: Libro = new Libro('iron man', "150", 300, 55, 'asfasdadqdq', "amor");
let revista1: Revista = new Revista('Para ti', "Para tí", 30, 5, 2022);
let revista2: Revista = new Revista('Oeste', 'Araceli', 12, 4, 2021);

let cliente1: Cliente = new Cliente('Juan', 'Perez', 11111, 'Velez Sarfield', autores, generos, [libro1, libro2], [revista1, revista2], 1);
let cliente2: Cliente = new Cliente('Hernan', 'Rodriguez', 112212, 'Nuñez', autores, generos, [libro2], [revista1], 1);

let arregloCliente: Cliente[] = [cliente1, cliente2];
let arregloLibro: Libro[] = [libro1, libro2];
let arregloRevista: Revista[] = [revista1, revista2];

/*let libreria1: Libreria = new Libreria(arregloCliente,arregloLibro,arregloRevista);

let primerPrecio=libreria1.calcularPrecio(cliente1,libro1);
console.log(primerPrecio);*/