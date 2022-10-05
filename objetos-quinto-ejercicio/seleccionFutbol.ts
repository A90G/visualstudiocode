import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";
import { Entrenador } from "./entrenador";

// clase Selección
class Selección {
  private plantel: Futbolista[];
  private masajistaContratado: Masajista;
  private entrenadorContratado: Entrenador;

constructor (pPlantel: Futbolista[], pMasajistaContratado: Masajista, pEntrenadorContratado: Entrenador){
  this.plantel = pPlantel;
  this.masajistaContratado = pMasajistaContratado;
  this.entrenadorContratado = pEntrenadorContratado;
}

public getPlantel(): Futbolista[] {
    return this.plantel;
 }
 public setPlantel(pPlantel): Futbolista[] {
   return this.plantel = pPlantel;
} 
public getMasajista(): Masajista {
    return this.masajistaContratado;
 }
 public modificarMasajista(pMasajistaContratado): Masajista {
   return this.masajistaContratado = pMasajistaContratado;
} 
public getEntrenador(): Entrenador {
    return this.entrenadorContratado;
 }
 public modificarEntrenador(pEntrenadorContratado): Entrenador {
   return this.entrenadorContratado = pEntrenadorContratado;
} 
/*public viaje(): void{
   if(this.plantel.getEstadoFisico === 100){QUIERO CREAR UN MÉTODO QUE ME DIGA SI TODOS LOS FUTBOLISTAS
    DEL PLANTEL ESTÁN ENTRENADOS. POR CUESTIONES DE TIEMPO NO LO PUDE TERMINAR PERO ESTIMO QUE TENGO QUE CREAR UNA CLASE PLANTEL Y COMO NO LO TENGO,
    NO LO PUEDO FINALIZAR.
       return "Apto para formar parte de la Selección que se va de viaje";
   }else{
       return "Continuar entrenando, no está listo";
   }
}*/

//se pueden establecer funciones para cambiar el masajista y el entrenador
}
