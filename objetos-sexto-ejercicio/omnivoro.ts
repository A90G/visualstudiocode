import { Mamiferos } from "./mamiferos";

export class Omnivoro extends Mamiferos {
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
        console.log ("Puede alimentar al animal con carne, pescado, frutas y verduras");
     } else {   
        console.log ("Recalcule los kgs de alimento");
     
     }
     }    
}
