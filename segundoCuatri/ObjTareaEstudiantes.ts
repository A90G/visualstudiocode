/*los profes deben tener un listado de alumnos
cada alumno debe tener su nota y saber si aprobó (mayor a 7)
institución debe tener listado de alumnos docentes y debe poder expulsar/despedir y matricular/contratar */
class Alumnos {
    private nombre:string;
    private apellido:string;
    private nota1:number;
    private nota2:number;
    private nota3:number;

    constructor (pNombre:string, pApellido:string, pNota1:number, pNota2:number, pNota3:number){
    this.nombre=pNombre;
    this.apellido=pApellido;
    this.nota1=pNota1;
    this.nota2=pNota2;
    this.nota3=pNota3;
    }

 /*cada get con su set para practicar*/
 public getNombre():string {
    return this.nombre;
 }
 public setNombre(pNombre): string {
   return this.nombre = pNombre;
}
 public getApellido():string {
    return this.apellido;
 }
 public setApellido(pApellido): string {
   return this.apellido = pApellido;
}
public getNota1():number {
   return this.nota1;
}
public getNota2():number {
   return this.nota2;
}
public getNota3():number {
   return this.nota3;
}
 public setNota1(pNota1):number{
    return this.nota1=pNota1;
 }
 public setNota2(pNota2):number{
   return this.nota2=pNota2;
}
public setNota3(pNota3):number{
   return this.nota3=pNota3;
}
public getCalificacion1(): string{
   if(this.nota1>7){
       return "Aprobado";
   }else{
       return "Desaprobado";
   }
}
public getCalificacion2(): string{
   if(this.nota2>7){
       return "Aprobado";
   }else{
       return "Desaprobado";
   }
}
public getCalificacion3(): string{
   if(this.nota3>7){
       return "Aprobado";
   }else{
       return "Desaprobado";
   }
}
/*posible camino b: crear un promedio de las 3 notas dadas y pasarlo por el calificador, pero no se ajusta con la consigna */
}

class Profesores {
   private nombre:string;
   private apellido:string;
   private listadoDeAlumnos:Alumnos[];
   private contrato: string;

       constructor(pNombre:string,pApellido:string,pListado:Alumnos[], pContrato:string) {
           this.nombre =pNombre;
           this.apellido=pApellido;
           this.listadoDeAlumnos = pListado;
           this.contrato = pContrato;
       }

public getNombre():string {
    return this.nombre;
 }
 public setNombre(pNombre): string {
   return this.nombre = pNombre;
}
 public getApellido():string {
    return this.apellido;
 }
 public setApellido(pApellido): string {
   return this.apellido = pApellido;
}
changeContrato ():void {
   if (this.contrato === "Despedido"){
       this.contrato = "Contratado";
   }else{ 
       this.contrato = "Despedido";
   }
}

}


class Escuela {}

let alumno1 = new Alumnos("Juan", "Garcia", 5, 6, 7);
let alumno2 = new Alumnos ("Maria","Gomez", 4,7,9);
let alumno3 = new Alumnos ("Pietro","Duran",8,8,8);

let listadoAl: Alumnos[] = [alumno1,alumno2,alumno3];

let profe1 = new Profesores("Juan", "Lastra", listadoAl, "Contratado");
let profe2 = new Profesores("Cecilia","Collado", listadoAl, "Contratado");
