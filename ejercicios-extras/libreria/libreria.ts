import { Cliente } from "./cliente";
import { Revista } from "./revista";
import { Libro } from "./libro";
import { Articulo } from "./articulo";

export class Libreria {
    protected listaClientes: Cliente[];
    protected listaLibros: Libro[];
    protected listaRevistas: Revista[];

    public constructor(pListaClientes: Cliente[], pListaLibros: Libro[], pListaRevista: Revista[]) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevista;
    }

    setRevista(nuevaRevista: Revista): void {
        this.listaRevistas.push(nuevaRevista);
    }

    setLibro(nuevoLibro: Libro): void {
        this.listaLibros.push(nuevoLibro);
    }

    setCliente(nuevoCliente: Cliente): void {
        this.listaClientes.push(nuevoCliente);
    }

    calcularPrecio(cliente: Cliente, articulo: Articulo): number {
        let precioConDescuento: number = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
    }

    setDescuento(cliente: Cliente, descuento: number): void {
        cliente.setDescuento(descuento);
    }

    consultarCompraArticulo(cliente: Cliente, articulo: Articulo): void {
        let encontrado: boolean = false;
        let listaLibrosRevistas = [ ...cliente.getListComprasLibro().concat(), ...cliente.getListComprasRevista()];

        for (let i: number = 0; i < listaLibrosRevistas.length; i++) {
            if (articulo.getNombre() === listaLibrosRevistas[i].getNombre()) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log(`El articulo ${articulo.getNombre()} fue comprado`);
        } else {
            console.log(`El articulo ${articulo.getNombre()} no fue comprado`);
        }
    }
}   