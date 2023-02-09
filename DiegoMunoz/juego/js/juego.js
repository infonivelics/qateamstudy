function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    if (inputHipodoge.Checked){
        alert('seleccion hipodoge')
    }   else if (inputCapipepo.Checked){
            alert('seleccion capipepo')
    }    else if (inputCapipepo.Checked){
        alert('seleccion capipepo')
    }
}

window.addEventListener('load', iniciarJuego)
