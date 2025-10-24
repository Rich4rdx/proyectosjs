const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");
const mensajeError = document.getElementById("mensajeError");


boton.addEventListener("click", ()=>{
  const texto = input.value.trim()

  if (texto === "" || texto == null) {
    mensajeError.textContent = "debes escribir una tarea"
    return
  }



const lista1 = document.createElement("li")
lista1.textContent = texto

lista1.addEventListener("click" , ()=>{
  if (lista1.classList.contains("completada"))
     {
      lista1.remove()
    
  }else{
    lista1.classList.add("completada")
  }
})


lista.appendChild(lista1)


input.value= ""

})