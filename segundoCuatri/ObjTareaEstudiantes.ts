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

 /**
  * getNombre
 :string */
 public getNombre():string {
    return this.nombre;
 }
 public getApellido():string {
    return this.apellido;
 }
 public setNota1():number{
    return this.nota1=pNota1;
 }

 public getCalificacion(): number{
    return this.apellido;
 }
}

class Profesores {


}


class Escuela {}