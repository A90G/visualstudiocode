import { Mamiferos } from "./mamiferos";

export class Omnivoro extends Mamiferos {
    constructor(pId: number, pAlimentacion: number, pTipoAlimento: string) {
        super(pId, pAlimentacion, pTipoAlimento);
    }

    public comer(kgs: number) {
        if (this.alimentacion >= kgs) {
            console.log("Puede alimentar al animal con carne, pescado, frutas y verduras");
        } else {
            console.log("Recalcule los kgs de alimento");
        }
    }
}
