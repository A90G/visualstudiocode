import { Mamiferos } from "./mamiferos";

export class Carnivoro extends Mamiferos {
   constructor(pId: number, pAlimentacion: number, pTipoAlimento: string) {
      super(pId, pAlimentacion, pTipoAlimento);
   }

   public comer(kgs: number) {
      if (this.alimentacion >= kgs) {
         console.log("Puede alimentar al animal con el tipo de carne que prefiera");
      } else {
         console.log("Recalcule los kgs según ficha de alimentación");
      }
   }
}
