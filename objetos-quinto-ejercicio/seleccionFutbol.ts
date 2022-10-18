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
public viajar(): void{
   let mensaje: string;
   //quiero decir, si el plantel está asignado, masajista y entrenador tmb entonces que salga el mensaje
   if (this.plantel === Futbolista[] &&  this.masajistaContratado === Masajista && this.entrenadorContratado === Entrenador){
      mensaje = "Selección lista para salir de viaje";
   }else{ 
      mensaje = "Viaje en fase: planificación";
   }
}

//se pueden establecer funciones para cambiar el masajista y el entrenador
}
