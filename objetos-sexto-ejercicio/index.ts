import { Carnivoro } from "./carnivoro";
import { Hervivoro } from "./hervivoro";
import { Omnivoro } from "./omnivoro";
import { Mamiferos } from "./mamiferos";

let yogui = new Omnivoro (355, 80, "variada");
let mufaza = new Carnivoro (567, 90, "carne");
let dumbo = new Hervivoro (22, 1000, "hojas verdes");
let spirit = new Hervivoro (378, 113, "pasto");

//yogui.getAlimentacion();
mufaza.comer(20);
//dumbo.getId();
//spirit.getTipoAlimento();
