/*los profes deben tener un listado de alumnos
cada alumno debe tener su nota y saber si aprobó (mayor a 7)
institución debe tener listado de alumnos docentes y debe poder expulsar/despedir y matricular/contratar */
class Alumno {
   private nombre: string;
   private apellido: string;
   private nota1: number;
   private nota2: number;
   private nota3: number;
   private estado: string;

   constructor(pNombre: string, pApellido: string, pNota1: number, pNota2: number, pNota3: number, pEstado: string) {
      this.nombre = pNombre;
      this.apellido = pApellido;
      this.nota1 = pNota1;
      this.nota2 = pNota2;
      this.nota3 = pNota3;
      this.estado = pEstado;
   }

   /*cada get con su set para practicar*/
   public getNombre(): string {
      return this.nombre;
   }
   public setNombre(pNombre: string): string {
      return this.nombre = pNombre;
   }
   public getApellido(): string {
      return this.apellido;
   }
   public setApellido(pApellido: string): string {
      return this.apellido = pApellido;
   }
   public getNota1(): number {
      return this.nota1;
   }
   public getNota2(): number {
      return this.nota2;
   }
   public getNota3(): number {
      return this.nota3;
   }
   public setNota1(pNota1: number): number {
      return this.nota1 = pNota1;
   }
   public setNota2(pNota2: number): number {
      return this.nota2 = pNota2;
   }
   public setNota3(pNota3: number): number {
      return this.nota3 = pNota3;
   }
   public getCalificacion1(): string {
      if (this.nota1 > 7) {
         return "Aprobado";
      } else {
         return "Desaprobado";
      }
   }
   public getCalificacion2(): string {
      if (this.nota2 > 7) {
         return "Aprobado";
      } else {
         return "Desaprobado";
      }
   }
   public getCalificacion3(): string {
      if (this.nota3 > 7) {
         return "Aprobado";
      } else {
         return "Desaprobado";
      }
   }
   public getEstado(): string {
      return this.estado;
   }
   public setEstado(pEstado: string): string {
      return this.estado = pEstado;
   }
   /*posible camino b: crear un promedio de las 3 notas dadas y pasarlo por el calificador, pero no se ajusta con la consigna */
}

class Profesor {
   private nombre: string;
   private apellido: string;
   private listadoDeAlumnos: Alumno[];
   private contrato: string;

   constructor(pNombre: string, pApellido: string, pListado: Alumno[], pContrato: string) {
      this.nombre = pNombre;
      this.apellido = pApellido;
      this.listadoDeAlumnos = pListado;
      this.contrato = pContrato;
   }

   public getNombre(): string {
      return this.nombre;
   }
   public setNombre(pNombre: string): string {
      return this.nombre = pNombre;
   }
   public getApellido(): string {
      return this.apellido;
   }
   public setApellido(pApellido: string): string {
      return this.apellido = pApellido;
   }
   public getContrato(): string {
      return this.contrato;
   }
   public setContrato(pContrato: string): string {
      return this.contrato = pContrato;
   }
}

class Escuela {
   private institucion: string;
   private listadoAlumnos: Alumno[];
   private listadoProfesores: Profesor[];

   constructor(pInstitucion: string, pListadoAlumnos: Alumno[], pListadoProfesores: Profesor[]) {
      this.institucion = pInstitucion;
      this.listadoAlumnos = pListadoAlumnos;
      this.listadoProfesores = pListadoProfesores;
   }

   public getInstitucion(): string {
      return this.institucion;
   }
   public setInstitucion(pInstitucion: string): string {
      return this.institucion = pInstitucion;
   }
   public changeEstado(pAlumno: Alumno): void {
      if (pAlumno.getEstado() === "Expulsado") {
         pAlumno.setEstado("Matriculado");
      } else {
         pAlumno.setEstado("Expulsado");
      }
   }
   public changeContratoProfesor(pProfesor: Profesor): void {
      if (pProfesor.getContrato() === "Despedido") {
         pProfesor.setContrato("Contratado");
      } else {
         pProfesor.setContrato("Despedido");
      }
   }
}

let alumno1 = new Alumno("Juan", "Garcia", 5, 6, 7, "Matriculado");
let alumno2 = new Alumno("Maria", "Gomez", 4, 7, 9, "Matriculado");
let alumno3 = new Alumno("Pietro", "Duran", 8, 8, 8, "Matriculado");

let listadoAl: Alumno[] = [alumno1, alumno2, alumno3];

let profe1 = new Profesor("Juan", "Lastra", listadoAl, "Contratado");
let profe2 = new Profesor("Cecilia", "Collado", listadoAl, "Contratado");

let listadoPr: Profesor[] = [profe1, profe2];

let secundaria = new Escuela("Nº1233", listadoAl, listadoPr);
