const prompt = require('prompt-sync')();
console.log("Hola mundo");

let firstNumber = prompt('Digite el primer numero: ');
let secondNumber = prompt('Digite el segundo numero: ');

while (firstNumber < 0 ) {
    console.log ('El numero ingresado debe ser mayor o igual a 0');
    firstNumber = prompt('Digite el primer numero: ');
}
while (secondNumber < 0 ) {
    console.log ('El numero ingresado debe ser mayor o igual a 0');
    secondNumber = prompt('Digite el segundo numero: ');
}
let result = Number(firstNumber) + Number(secondNumber);

console.log("El resultado de la suma es: "+result);