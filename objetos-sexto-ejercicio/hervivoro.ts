import { Mamiferos } from "./mamiferos";

export class Hervivoro extends Mamiferos {
    constructor(pId: number, pAlimentacion: number, pTipoAlimento: string) {
        super(pId, pAlimentacion, pTipoAlimento);
    }

    public comer(kgs: number) {
        if (this.alimentacion >= kgs) {
            console.log("Puede alimentar al animal con el tipo de hoja que prefiera");
        } else {
            console.log("Recalcule los kgs de hojas");
        }
    }
}
