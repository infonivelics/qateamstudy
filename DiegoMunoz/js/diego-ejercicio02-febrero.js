//declaro una funcion
function aleatorio(min, max){
    //math.floor quita los decimales
    //math.random trae un numero entre 0.1 y 0.9
    return Math.floor( Math.random() * (max - min + 1) + min)
  }
  
  //llamamos la funcion enviando los dos parametros
  let primernumero = aleatorio(0,10)
  let segundonumero = aleatorio(0,10)
  let numeroejecuciones = 0
    alert("primer numero: " + primernumero)
    alert("segundo numero: " + segundonumero)
  
  while(primernumero !== segundonumero){
    alert("primer numero: " + primernumero)
    alert("segundo numero: " + segundonumero)
    primernumero = aleatorio(0,10)
    segundonumero = aleatorio(0,10)
    numeroejecuciones = numeroejecuciones + 1     
  }
  
  alert("Este programa se ejecuto " + numeroejecuciones + " veces. El primer numero es: " + primernumero + " y el segundo numero es:." + segundonumero)