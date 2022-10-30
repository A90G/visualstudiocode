import { Articulo } from "./articulo";

export class Revista extends Articulo {
    private numero: number;
    private anio: number;

    constructor(pNombre: string, pAutor: string, pPrecio: number, pNumero: number, pAnio: number) {
        super(pNombre, pAutor, pPrecio);
        this.numero = pNumero;
        this.anio = pAnio;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(pNumero): number {
        return this.numero = pNumero;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(pAnio): number {
        return this.anio = pAnio;
    }
}