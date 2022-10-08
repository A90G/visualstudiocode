import { Mamiferos } from "./mamiferos";

export class Carnivoro extends Mamiferos {
    private tipoAlimento: string;

    constructor (pId:number, pAlimentacion:number, pTipoAlimento:string){
        super(pId, pAlimentacion);
        this.tipoAlimento = pTipoAlimento;
        }
    
    public getTipoAlimento(): string {
        return this.tipoAlimento;
     }
     public setTipoAlimento(pTipoAlimento): string {
       return this.tipoAlimento = pTipoAlimento;
    }
    
    public comer(kgs:number){
       if(this.alimentacion >= kgs){
       console.log ("Puede alimentar al animal con el tipo de carne que prefiera");
    } else {   
       console.log ("Recalcule los kgs según ficha de alimentación");
    
    }
    }
    }
  