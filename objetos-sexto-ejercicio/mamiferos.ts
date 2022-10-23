export class Mamiferos {
   protected ID: number;
   protected alimentacion: number;
   protected tipoAlimento: string;

   constructor(pId: number, pAlimentacion: number, pTipoAlimento: string) {
      this.ID = pId;
      this.alimentacion = pAlimentacion;
      this.tipoAlimento = pTipoAlimento;
   }

   /*cada get con su set para practicar*/
   public getId(): number {
      return this.ID;
   }

   public setId(pId): string {
      return this.ID = pId;
   }

   public getAlimentacion(): number {
      return this.alimentacion;
   }

   public setAlimentacion(pAlimentacion): number {
      return this.alimentacion = pAlimentacion;
   }

   public getTipoAlimento(): string {
      return this.tipoAlimento;
   }

   public setTipoAlimento(pTipoAlimento): string {
      return this.tipoAlimento = pTipoAlimento;
   }

   public comer(kgs: number) {
      if (this.alimentacion >= kgs) {
         console.log("Puede alimentar al animal");
      } else {
         console.log("Recalcule los kgs de alimento");
      }
   }
}