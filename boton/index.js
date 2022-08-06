let botonDecrementar = document.getElementsByClassName("decrementar");
let botonIncrementar = document.getElementsByClassName("incrementar");
let botonSumar = document.getElementsByClassName("sumar");
let myInput= document.getElementsByClassName("resultado");
let theSpan= document.getElementsByClassName("contador");

let cantidad=0;

function decrementar() {
   cantidad--;
   theSpan.innerHTML = cantidad;
   console.log("decrementar"+cantidad);
  }
  
function incrementar() {
    cantidad++;
    theSpan.innerHTML = cantidad;
    console.log("incrementar"+cantidad);
   }
   
function sumar() {
    cantidad--;
    console.log("decrementar"+cantidad)
   }

   botonDecrementar.addEventListener("click", decrementar);
   botonIncrementar.addEventListener("click", incrementar);