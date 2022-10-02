import { Persona } from "./persona";
import { Futbolista } from "./futbolista";

// clase Entrenador
export class Entrenador extends Persona{
  protected plantel: Futbolista[];

constructor (pNombre:string, pApellido:string, pEdad:number, pPlantel: Futbolista[]){
  super(pNombre,pApellido,pEdad);
  this.plantel = pPlantel;
}

/*public getPlantel(): void {
  return this.plantel;
}*/

public setPlantel(pPlantel: Futbolista[]){
    this.plantel = pPlantel;
  }

public entrenar(futbolista: Futbolista): any {
  for (let i: number = 0; i < this.plantel.length; i++) {
    if (futbolista.getNombre() === this.plantel[i].getNombre()) {
      this.plantel[i].setEstadoFisico(100);
      return console.log(`Futbolista ${futbolista.getNombre()} está entrenado`);
      } 
  }
  return console.log(`Futbolista ${futbolista.getNombre()} faltó al entrenamiento`);
  }
  }
