//alert("Hola este es mi Javascript");
//let nombre = "Laura"
//var nombre1 = "Palacios"

//console.log(nombre);
//console.log(nombre1);

//let contenidoTitulo = "Acerca de mi";
//let titulo= document.querySelector(".script")
//titulo.innerHTML = contenidoTitulo;
//condicionales
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);
//if (textoTitulo == "Acerca de mi"){
//    titulo.innerHTML = "Acerca de mi";
//} else {
//   console.log("no se cumple") 
//}

//funciones

//let nombre = "Sara";
//let pais = "España";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, pais){
//    let contenido = `¡Hola a todos! Mi nombre es ${nombre}, tengo 26 años y vivo en ${pais}.`;
  //  return contenido;
//}
//parrafo.innerText = cambiarTexto(nombre, pais);
let menu_responsive = document.querySelector("checkbtn");

menu_responsive.onclick =function(){
  navBar = document.querySelector(".navBar");
  navBar.classList.toggle("active");
}



const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});