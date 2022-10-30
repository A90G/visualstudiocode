import { Articulo } from "./articulo";

export class Libro extends Articulo {
    private cantidadHojas: number;
    private resumen: string;
    private generoLiterario: string;

    constructor(pNombre: string, pAutor: string, pPrecio: number, pCantidadHojas: number, pResumen: string, pGeneroLiterario: string) {
        super(pNombre, pAutor, pPrecio);
        this.cantidadHojas = pCantidadHojas;
        this.resumen = pResumen;
        this.generoLiterario = pGeneroLiterario;
    }

    public getCantidadHojas(): number {
        return this.cantidadHojas;
    }

    public setCantidadHojas(pCantidadHojas): number {
        return this.cantidadHojas = pCantidadHojas;
    }

    public getResumen(): string {
        return this.resumen;
    }

    public setResumen(pResumen): string {
        return this.resumen = pResumen;
    }

    public getGeneroLiterario(): string {
        return this.generoLiterario;
    }

    public setGeneroLiterario(pGeneroLiterario): string {
        return this.generoLiterario = pGeneroLiterario;
    }
}