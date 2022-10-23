export class Cliente {
    protected nombre: string;
    protected apellido: string;
    protected DNI: number;
    protected direccion: string;
    protected listAutorFav: string[];
    protected listGenFav: string[];
    protected listComprasFav?: string[];
    protected califClientes: number;
    protected descuento: number;

    public constructor(pNombre: string, pApellido: string, pDNI: number, pDireccion: string, pListAutorFav: string[], pListGenFav: string[], pCalifClientes: number, pDescuento: number, pListComprasFav?: string[]){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.DNI = pDNI;
        this.direccion = pDireccion;
        this.listAutorFav = pListAutorFav;
        this.listGenFav = pListGenFav;
        this.listComprasFav = pListComprasFav;
        this.califClientes = pCalifClientes;
        this.descuento = pDescuento;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public setNombre(pNombre): string {
        return this.nombre = pNombre;
    }
    public getApellido(): string{
        return this.apellido;
    }
    public setApellido(pApellido): string {
        return this.apellido = pApellido;
     }
    public getDNI(): number{
        return this.DNI;
    }
    public setDNI(pDNI): number {
        return this.DNI = pDNI;
    }
    public getDireccion(): string{
        return this.direccion;
    }
    public setDireccion(pDireccion): string {
        return this.direccion = pDireccion;
    }
    public getListaAutoresFavoritos(): string[]{
        if(this.listAutorFav.length !== 0){
            return this.listAutorFav;
        } else {
            throw new Error(`El cliente ${this.apellido} ${this.nombre} precisa recomedaciones del vendedor`);
        }
    }
    public setListaAutoresFavoritos(NvoAutorFav): void {
        this.listAutorFav.push(NvoAutorFav);
    }
    public getListaGeneroFavoritos(): string[]{
        if(this.listGenFav.length !== 0){
            return this.listGenFav;
        }
        else {
            throw new Error(`El cliente ${this.apellido} ${this.nombre} precisa recomedaciones del vendedor`);
        }
    }
    public setListaGeneroFavoritos(NvoGroFav): void {
        this.listAutorFav.push(NvoGroFav);
    }
    /*public getListadoComprasFavoritas(): string[] {
        if(this.listComprasFav.length !== 0){
            return this.listComprasFav;
        } else {
            throw new Error(`El cliente ${this.apellido} ${this.nombre} no realizó compras previas`);
        }    
    } esto no sé cómo resolverlo porque vimos cómo creaR EN EL constructor, pero luego como trabajarlas
    dentro del mètodo no, voy a investigar...*/
    public getCalifClientes(): number{
        return this.califClientes;
    }
    public setCalifClientes(pCalifClientes): number {
        return this.califClientes = pCalifClientes;
    }
    public getDescuento():number{
        return this.descuento;
    }
    }