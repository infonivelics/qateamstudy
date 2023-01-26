//hola mundo en Node js
//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.end('Hola Mundo');
//}).listen(8080);


//declaro una funcion
function aleatorio(min, max){
  //math.floor quita los decimales
  //math.random trae un numero entre 0.1 y 0.9
  return Math.floor( Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
  let resultado = ""
  if (jugada == 1){
      resultado = "Piedra 🪨"
  } else if(jugada == 2){
      resultado = "Papel 🧻"
  } else if(jugada == 3){
      resultado = "Tijera ✂️"
  } else{
      resultado = "Elige correctamente"
  }
  return resultado
}

function combate(player, pc){
    if (pc == player){
      alert("EMPATE")
  } else if(pc == 3 && player == 1 || pc == 1 && player == 2 || pc == 2 && player == 3){
      alert("ERES UN CHAMPION")
      triunfar ++
  } else 
      alert("LOSER")
      perder ++
}
let player = 0
//llamamos la funcion enviando los dos parametros        
let pc = 0
let triunfar = 0
let perder = 0

while(triunfar < 3 && perder < 3){
  pc = aleatorio(1,3)
  player = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")
  alert("Tu elegiste: " + eleccion(player))
  alert("Pc elige: " + eleccion(pc))
          
  //COMBATE
  if (pc == player){
    alert("EMPATARON")
} else if(pc == 3 && player == 1){
    alert("ERES UN CHAMPION")
    triunfar = triunfar + 1
} else if(pc == 1 && player == 2){
    alert("ERES UN CHAMPION")
    triunfar = triunfar + 1
} else if(pc == 2 && player == 3){
    alert("ERES UN CHAMPION")
    triunfar = triunfar + 1
} else{
    alert("LOSER")
    perder = perder + 1
  }
}

alert("Ganaste " + triunfar + " veces. Perdiste " + perder + " veces.")