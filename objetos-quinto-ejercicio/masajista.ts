import { Persona } from "./persona";
import { Futbolista } from "./futbolista";

//clase masajista
export class Masajista extends Persona{
  protected plantel: Futbolista[];

  constructor (pNombre:string, pApellido:string, pEdad:number, pPlantel: Futbolista[]){
    super(pNombre,pApellido,pEdad);
    this.plantel = pPlantel;
}

/*public getPlantel():string {
  return this.plantel;
}*/

public setPlantel(pPlantel: Futbolista[]){
    this.plantel = pPlantel;
  }

public brindarMasaje(futbolista: Futbolista): any {
  for (let i: number = 0; i < this.plantel.length; i++) {
    if (futbolista.getNombre() === this.plantel[i].getNombre()) {
      this.plantel[i].setEstadoFisico(100);
        return console.log(`Futbolista ${futbolista.getNombre()} está relajado y listo para el viaje`);
      } 
    }
    return console.log(`Futbolista: ${futbolista.getNombre()} , revisar Estado Físico antes del viaje`);
  }
}