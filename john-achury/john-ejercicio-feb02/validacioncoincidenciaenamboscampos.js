function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)+ min)
}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🪨"
    } else if(jugada ==2) {
        resultado = (" Papel 📄")
    } else if(jugada == 3) {
        resultado = (" Tijera ✂️")
    } else {
        resultado = "DESIDISTE SELECCIONAR UNA OPCION INVALIDA"
    }
    return resultado

}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas <3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")
    //alert("elegiste " + jugador)

    alert("PC eligio: " + eleccion(pc))
    alert("Tu elegiste: " + eleccion(jugador))

    //COMBATE
    if(pc == jugador) {
        alert("EMPATE")
    } else if(jugador == 1 && pc == 3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }

}

alert("Ganaste " + triunfos + "vecesy Perdiste " + perdidas + " veces.")