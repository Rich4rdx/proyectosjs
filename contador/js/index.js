const textoH1 = document.getElementById("h1")
const contador = document.getElementById("h2")
const boton1 = document.getElementById("boton+")
const boton2 = document.getElementById("boton-")
const boton3= document.getElementById("botonreset")



let numero = 0

function cambiarColor() {
    if (numero > 0) {
        contador.style.color = "green"
        
    }else if(numero < 0){
        contador.style.color = "red"

    }else{
        contador.style.color ="black"
    }
    
  
}

  boton1.addEventListener(`click` , () =>{
        numero++
        contador.textContent= numero
        cambiarColor()
    })

    boton2.addEventListener("click",()=>{
        numero--
        contador.textContent = numero
        cambiarColor()
    })

    boton3.addEventListener("click", ()=>{
        numero = 0
        contador.textContent= numero
        cambiarColor()
    })