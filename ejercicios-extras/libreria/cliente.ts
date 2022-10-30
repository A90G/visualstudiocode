import { Libro } from "./libro";
import { Revista } from "./revista";

export class Cliente {
    protected nombre: string;
    protected apellido: string;
    protected DNI: number;
    protected direccion: string;
    protected listAutorFav: string[];
    protected listGenFav: string[];
    protected listComprasLibro: Libro[];
    protected listComprasRevista: Revista[];
    protected descuento: number;

    public constructor(pNombre: string, pApellido: string, pDNI: number, pDireccion: string, pListAutorFav: string[], pListGenFav: string[], pListComprasLibro: Libro[], pListComprasRevista: Revista[], pDescuento: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.DNI = pDNI;
        this.direccion = pDireccion;
        this.listAutorFav = pListAutorFav;
        this.listGenFav = pListGenFav;
        this.listComprasLibro = pListComprasLibro;
        this.listComprasRevista = pListComprasRevista;
        this.descuento = pDescuento;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(pNombre): void {
        this.nombre = pNombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(pApellido): void {
        this.apellido = pApellido;
    }

    public getDNI(): number {
        return this.DNI;
    }

    public setDNI(pDNI): void {
        this.DNI = pDNI;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(pDireccion): void {
        this.direccion = pDireccion;
    }

    public getListaAutoresFavoritos(): string[] {
        if (this.listAutorFav.length !== 0) {
            return this.listAutorFav;
        } else {
            throw new Error(`El cliente ${this.apellido} ${this.nombre} precisa recomedaciones del vendedor`);
        }
    }

    public setListaAutoresFavoritos(NvoAutorFav): void {
        this.listAutorFav.push(NvoAutorFav);
    }

    public getListaGeneroFavoritos(): string[] {
        if (this.listGenFav.length !== 0) {
            return this.listGenFav;
        }
        else {
            throw new Error(`El cliente ${this.apellido} ${this.nombre} precisa recomedaciones del vendedor`);
        }
    }

    public setListaGeneroFavoritos(NvoGroFav): void {
        this.listAutorFav.push(NvoGroFav);
    }

    public getListComprasLibro(): Libro[] {
        return this.listComprasLibro;
    }

    public comprarLibro(NvoLibro): void {
        this.listComprasLibro.push(NvoLibro);
    }

    public getListComprasRevista(): Revista[] {
        return this.listComprasRevista;
    }

    public comprarRevista(NvaRevista): void {
        this.listComprasRevista.push(NvaRevista);
    }

    public getDescuento(): number {
        return this.descuento;
    }

    public setDescuento(pDescuento: number): void {
        this.descuento = pDescuento;
    }

    public leGustaLibro(libro: Libro): void {
        let encontrado: boolean = false;
        for (let i: number = 0; i < this.listAutorFav.length; i++) {
            if (libro.getAutor() === this.listAutorFav[i]) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log(`El autor ${libro.getAutor()} es favorito`);
        } else {
            console.log(`El autor ${libro.getAutor()} no es favorito`);
        }
    }

    public leGustaLibroExigente(libro: Libro): void {
        let encontradoAutor: boolean = false;
        let encontradoGenero: boolean = false;
        for (let i: number = 0; i < this.listAutorFav.length; i++) {
            if (libro.getAutor() === this.listAutorFav[i]) {
                encontradoAutor = true;
                for (let i: number = 0; i < this.listGenFav.length; i++) {
                    if (libro.getGeneroLiterario() === this.listGenFav[i]) {
                        encontradoGenero = true;
                    }
                }
            }
        }
        if (encontradoAutor === true && encontradoGenero === true) {
            console.log(`El autor ${libro.getAutor()} y el genero "${libro.getGeneroLiterario()}" son favoritos`);
        } else {
            console.log(`El autor ${libro.getAutor()} y el genero "${libro.getGeneroLiterario()}" no son favoritos`);
        }
    }
}