const readline = require('readline-sync');

console.log('La maquina debe ingresar numeros aleatorios en 2 campos, y hasta que los 2 campos no coincidan, no se finaliza el proceso comparativo');

let campoUno = Math.floor(Math.random() * 10);
let campoDos = Math.floor(Math.random() * 10);
let contador = 1;


while (campoUno != campoDos) {
   console.log ("El numero ingresado en el campo 1 es " + campoUno + " y el numero ingresado en el campo 2 es " + campoDos + " Datos NO coinciden, intentar de nuevo")
   campoUno = Math.floor(Math.random() * 10);
   campoDos = Math.floor(Math.random() * 10);
      contador = contador + 1; 
   }

   console.log ("El numero ingresado en el campo 1 es " + campoUno + " y el numero ingresado en el campo 2 es " + campoDos + " los datos Datos coinciden, y se ejecuto " + contador + " veces")