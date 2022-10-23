import { Cliente } from "./cliente";
import { Revista } from "./revista";
import { Libro } from "./libro";
import { Padre } from "./padre";

export class Libreria {
    protected listaClientes: Cliente[];
    protected listaLibros: Libro[];
    protected listaRevistas: Revista[];

    public constructor(pListaClientes: Cliente[], pListaLibros: Libro[], pListaRevista: Revista[]) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevista;
    }
    setRevista(nuevaRevista: Revista): void{
        this.listaRevistas.push(nuevaRevista);
    }
    setLibro(nuevoLibro: Libro): void{
        this.listaLibros.push(nuevoLibro);
    }
    setCliente(nuevoCliente: Cliente): void{
        this.listaClientes.push(nuevoCliente);
    }
    calcularPrecio(cliente: Cliente, articulo: Padre): number{
        let precioConDescuento:number=0;
        precioConDescuento=articulo.getPrecio()*(1-cliente.getCalifClientes());
        return precioConDescuento;
    } 
    setDescuento(cliente:Cliente, descuento:number):void{
        cliente.getDescuento();
    }
}   