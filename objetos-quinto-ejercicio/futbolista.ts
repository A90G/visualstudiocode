import { Persona } from "./persona";


export class Futbolista extends Persona{
  private estadoFisico: number;
  private categoria: string;

  constructor (pNombre: string, pApellido: string, pEdad: number, pEstadoFisico: number, pCategoria: string){
    super(pNombre, pApellido, pEdad);
    this.estadoFisico = pEstadoFisico;
    this.categoria = pCategoria;
}
public getNombreFutbolista():string {
  return this.nombre;
}

public setEstadoFisico(pEstadoFisico: number){
    this.estadoFisico = 70;
  }

public getEstadoFisico(){
    return this.estadoFisico;
  }

public setCategoria(pCategoria: string){
    this.categoria = "Jugador de Primera";
  }

public getCategoria(){
    return this.categoria;
  }

public entrenamiento(){
    this.estadoFisico += 10;
  }

public entrenamientoCompleto(){
    if (this.estadoFisico >= 90){
        console.log('Me voy a dar un masaje');
    } else {
        console.log('Continuaré entrenando...');
    } 
}

public cambiarCategoria(): void {
   if (this.categoria === "Jugador de Primera"){
       this.categoria = "Suplente";
   }else{ 
       this.categoria = "Jugador de Primera";
   }
}

public covid(): void {
    if (this.estadoFisico <= 40){
        this.estadoFisico +- 20;
        console.log("El jugador es COVID positivo deberá realizar cuarentena")
    }
}

}


  
   