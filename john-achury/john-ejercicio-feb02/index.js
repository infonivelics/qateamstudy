//trabajo febrero 2: 
//1. crear 2 campos en nodejs.
//2. crear un algoritmo que busque estos 2 campos y los diligencie con datos random de 0 a 10 digitos como maximo.
//3. este codigo se debe seguir ejecutando hasta que los 2 campos coincidan.
//4. indicar con alertas, que los campos no coinciden
//5. inidicar con alerta, que los campos coinciden

const readline = require('readline-sync');

console.log('Hola maquina, ingrese un numero de 0 a 10 de manera aleatoria');
let numeroAleatorio = (Math.floor(Math.random() * 10));
console.log ("el numero inicial es " + numeroAleatorio);
let numeroComparativo = 0;
do {
   numeroComparativo = Math.floor(Math.random() * 10);
   console.log ("El numero comparativo es " + numeroComparativo + " el Numero aleatorio es " + numeroAleatorio)
} while (numeroComparativo != numeroAleatorio);

// let miarray = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

//   miarray.forEach(function(item,index,arr){
//     console.log(item);
// });
// console.log(function aleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// })


// preguntacampoUno = readline.question(`Ingrese`);


// if (preguntacampoCero == "" || preguntacampoCero == "si" || preguntacampoCero == "sI" || preguntacampoCero == "Si") {

//   campoCero = readline.question(`PASO 2: Porfavor dijite su nombre o Nickname `);

//   if (campoCero == "") {

//     console.log('No se ingreso NINGUN nombre, para continuar con el proceso, vuelva a intentarlo desde el paso 1. !Gracias!');

//   }
//   else {

//     console.log('PASO 3: hola, ' + campoCero, 'Soy un pequeño algoritmo que hace una suma basica de 2 sumandos y para iniciarla hacer,');

//     campoOne = readline.question(`inicie digitando un NUMERO o el sumando #1  `);

//     if (!campoOne.match(/^\d+$/)) {

//       console.log('El dato ingresado No es un Numero valido, vuelva a intentarlo desde el paso 1. !Gracias!');

//     }
//     else {

//       campoTwo = readline.question(`PASO 4: Listo, ahora porfavor, digite el otro NUMERO o el sumando #2  `);

//       if (!campoTwo.match(/^\d+$/)) {

//         console.log('El dato ingresado No es un Numero valido, vuelva a intentarlo desde el paso 1. !Gracias!');

//       }

//       else {

//         result = Number(campoOne) + Number(campoTwo);

//         console.log("RESULTADO: El producto de la suma entre estos 2 sumandos ingresados es: " + result, 'Hasta pronto!');

//       }
//     }
//   }
// }

// else {
//   console.log("Como el Nombre o el Nickname es obligatorio y no se ingreso una opcion valida, el programa Finaliza... gracias por su tiempo");

// } 


// function aleatorio(min,max) {
//   return Math.floor(Math.random() * (max - min + 1)+ min)
// }
// function eleccion(jugada) {
//   let resultado = ""
//   if(jugada == 1) {
//       resultado = "Piedra 🪨"
//   } else if(jugada ==2) {
//       resultado = (" Papel 📄")
//   } else if(jugada == 3) {
//       resultado = (" Tijera ✂️")
//   } else {
//       resultado = "DESIDISTE SELECCIONAR UNA OPCION INVALIDA"
//   }
//   return resultado

// }
// // 1 es piedra, 2 es papel, 3 es tijera
// let jugador = 0
// let pc = 0
// let triunfos = 0
// let perdidas = 0

// while (triunfos < 3 && perdidas <3) {
//   pc = aleatorio(1,3)
//   jugador = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")
//   //alert("elegiste " + jugador)

//   alert("PC eligio: " + eleccion(pc))
//   alert("Tu elegiste: " + eleccion(jugador))

//   //COMBATE
//   if(pc == jugador) {
//       alert("EMPATE")
//   } else if(jugador == 1 && pc == 3) {
//       alert("GANASTE")
//       triunfos = triunfos + 1
//   } else if(jugador == 2 && pc == 1) {
//       alert("GANASTE")
//       triunfos = triunfos + 1
//   } else if(jugador == 3 && pc == 2) {
//       alert("GANASTE")
//       triunfos = triunfos + 1
//   } else {
//       alert("PERDISTE")
//       perdidas = perdidas + 1
//   }

// }

// alert("Ganaste " + triunfos + "vecesy Perdiste " + perdidas + " veces.")