export class Cliente {
    protected nombre: string;
    protected apellido: string;
    protected DNI: number;
    protected direccion: string;
    protected listAutorFav: string[];
    protected listGenFav: string[];
    protected listComprasFav: string[];
    protected califClientes: number;

    public constructor(pNombre: string, pApellido: string, pDNI: number, pDireccion: string, pListAutorFav: string[], pListGenFav: string[], pListComprasFav: string[], pCalifClientes: number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.DNI = pDNI;
        this.direccion = pDireccion;
        this.listAutorFav = pListAutorFav;
        this.listGenFav = pListGenFav;
        this.listComprasFav = pListComprasFav;
        this.califClientes = pCalifClientes;
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
    public getListaAutoresFavoritos(): string[] {
        return this.listAutorFav;
    }
    public setListaAutoresFavoritos(pListAutorFav): string[] {
        return this.listAutorFav = pListAutorFav;
    }
    public getListaGeneroFavoritos(): string[]{
        return this.listGenFav;
    }
    public setListaGeneroFavoritos(pListGenFav): string[] {
        return this.listGenFav = pListGenFav;
    }
    public getListadoComprasFavoritas(): string[]{
        return this.listComprasFav;
    }
    public setListadoComprasFavoritas(pListComprasFav): string[] {
        return this.listComprasFav = pListComprasFav;
    }
    public getCalifClientes(): number{
        return this.califClientes;
    }
    public setCalifClientes(pCalifClientes): number {
        return this.califClientes = pCalifClientes;
    }
    }