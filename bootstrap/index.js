let producto = document.querySelector(".myInput");
let precio = document.querySelector(".myInputPrecio");
let cantidad = document.querySelector(".myInputCant");
let miLista = document.querySelector(".myList");
let subTotal = document.querySelector(".compraSubtotal");
let resTotal = document.querySelector(".compraTotal");

let arrayProductos = [];
let arrayPrecios = [];
let arrayCantidad = [];

let agregarProducto = () => {
    let prod = document.querySelector(".myInput").value;
    arrayProductos.push(prod);
    let prec = parseInt(document.querySelector(".myInputPrecio").value);
    arrayPrecios.push(prec);
    let cant = parseInt(document.querySelector(".myInputCant").value);
    arrayCantidad.push(cant);
    let nuevoProducto = document.createElement("li");
    nuevoProducto.innerHTML = cant +" unidades de "+ prod + "  $ "+ prec;
    miLista.appendChild(nuevoProducto);
    prod.value = "";
    prec.value = "";
    cant.value = "";
  }
  
  let eliminarLast = () => {
    arrayProductos.pop();
    arrayPrecios.pop();
    arrayCantidad.pop();
    miLista.removeChild(miLista.lastChild);
  }
  
  let eliminarAll = () => {
    arrayProductos = [];
    arrayPrecios = [];
    arrayCantidad = [];
    miLista.innerHTML = "";
  }

  let calcularSubTotal = () => {
    let resultado = 0;
    for (let i = 0; i < arrayProductos.length; i++) {
        resultado = resultado + parseInt((arrayPrecios[i] * arrayCantidad[i]));
    }
    subTotal.innerHTML = resultado;
  }
  
  let calcularTotal = () => {
    let total = 0;
    for (let i = 0; i < arrayProductos.length; i++) {
      total = total + parseInt((arrayPrecios[i] * arrayCantidad[i]));
    }
    resTotal.innerHTML = total;
  }

let botonAgregar = document.querySelector(".addBtn");
botonAgregar.addEventListener("click", agregarProducto);
let botonEliminarUltimo = document.querySelector(".removeLast");
botonEliminarUltimo.addEventListener("click", eliminarLast);
let botonEliminarAll = document.querySelector(".removeAll");
botonEliminarAll.addEventListener("click", eliminarAll);
/*let botonSubTotal = document.querySelector(".calcularSubCompra");
botonSubTotal.addEventListener("click", calcularSubTotal);*/
let botonTotal = document.querySelector(".calcularCompra");
botonTotal.addEventListener("click", calcularTotal);
