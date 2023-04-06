let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua  = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra  = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}   

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotajugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
       spanMascotajugador.innerHTML = "Hipodoge"
    }   else if (inputCapipepo.checked){
        spanMascotajugador.innerHTML = "Capipepo"
    }   else if (inputRatigueya.checked){
        spanMascotajugador.innerHTML = "Ratigueya"
    }   else { 
        alert('No seas bruto. debes seleccionar algo')
    }
    seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"    
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

//COMBATE
function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
  if (ataqueEnemigo == ataqueJugador){
    crearMensajes("EMPATARON")
} else if(ataqueEnemigo == "TIERRA" && ataqueJugador == "FUEGO"){
    crearMensajes("ERES UN CHAMPION")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
} else if(ataqueEnemigo == "FUEGO" && ataqueJugador == "AGUA"){
    crearMensajes("ERES UN CHAMPION")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
} else if(ataqueEnemigo == "AGUA" && ataqueJugador == "TIERRA"){
    crearMensajes("ERES UN CHAMPION")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
} else{
    crearMensajes("LOSER")
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
  }

  revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajesFinal ("FELICITACIONES GANASTE")
    } else if (vidasJugador == 0){
        crearMensajesFinal ("PERDISTE EL JUEGO")
    }
}

function crearMensajesFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua  = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra  = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function crearMensajes(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' -' + resultado

    sectionMensajes.appendChild(parrafo)
}

function reiniciarJuego(){
    location.reload()
}


function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)
  }

  
window.addEventListener('load', iniciarJuego)
