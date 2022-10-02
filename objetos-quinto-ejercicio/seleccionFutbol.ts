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

/*
public viaje(): void{
   if(this.plantel.getEstadoFisico === 100){
       return "Viaje preparado";
   }else{
       return "Continuar entrenando, equipo no está listo";
   }
}

//se pueden establecer funciones para cambiar el masajista y el entrenador

public viajar(futbolista: Futbolista): any {
  for (let i: number = 0; i < this.plantel.length; i++) {
    if (futbolista.getNombre() === this.plantel[i].getNombre()) {
      this.plantel[i].getEstadoFisico() > 90;
      return console.log(`Futbolista ${futbolista.getNombre()} está entrenado`);
      } 
  }
  return console.log(`Futbolista ${futbolista.getNombre()} faltó al entrenamiento`);
  }*/
  }
