export class Padre {
    protected nombre: string;
    protected autor: string;
    protected precio: number;

    constructor (pNombre: string, pAutor: string, pPrecio: number){
    this.nombre = pNombre;
    this.autor = pAutor;
    this.precio = pPrecio;
}

public getNombre(): string {
    return this.nombre;
 }
public setNombre(pNombre): string {
   return this.nombre = pNombre;
}
public getAutor(): string {
    return this.autor;
 }
public setAutor(pAutor): string {
   return this.autor = pAutor;
}
public getPrecio(): number {
   return this.precio;
}
public setPrecio(pPrecio): number{
    return this.precio = pPrecio;
 }
 }
 //falta fórmula conocer precio según cliente 
