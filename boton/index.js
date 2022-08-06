let botonDecrementar = document.getElementById("decrementar");
let botonIncrementar = document.getElementById("incrementar");
let botonSumar = document.getElementById("sumar");
let myInput= document.getElementById("resultado");
let theSpan= document.getElementById("contador");

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
    cantidad+= parseInt(myInput.value);
    theSpan.innerHTML=cantidad;
    console.log("sumar"+cantidad);
   }

   botonDecrementar.addEventListener("click", decrementar);
   botonIncrementar.addEventListener("click", incrementar);
   botonSumar.addEventListener("click", sumar);