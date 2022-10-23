import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";
import { Entrenador } from "./entrenador";

// clase Selección
class Selección {
   private plantel: Futbolista[];
   private masajistaContratado: Masajista;
   private entrenadorContratado: Entrenador;

   constructor(pPlantel: Futbolista[], pMasajistaContratado: Masajista, pEntrenadorContratado: Entrenador) {
      this.plantel = pPlantel;
      this.masajistaContratado = pMasajistaContratado;
      this.entrenadorContratado = pEntrenadorContratado;
   }

   public getPlantel(): Futbolista[] {
      return this.plantel;
   }

   public setPlantel(pPlantel: Futbolista[]): void {
      this.plantel = pPlantel;
   }

   public getMasajista(): Masajista {
      return this.masajistaContratado;
   }

   public modificarMasajista(pMasajista: Masajista): void {
      this.masajistaContratado = pMasajista;
   }

   public getEntrenador(): Entrenador {
      return this.entrenadorContratado;
   }

   public modificarEntrenador(pEntrenador): void {
      this.entrenadorContratado = pEntrenador;
   }

   public puedeViajar(): boolean {
      //quiero decir, si el plantel está asignado, masajista y entrenador tmb entonces que salga el mensaje
      if (this.plantel.length > 0 && this.masajistaContratado && this.entrenadorContratado) {
         return true;
      } else {
         return false;
      }
   }

   //se pueden establecer funciones para cambiar el masajista y el entrenador
}
