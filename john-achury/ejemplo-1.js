const readline = require('readline-sync');

console.log("Hola Mundo y buenos dias...");

preguntacampoCero = readline.question(`Desea darnos su Nombre o Nickname? marque SI / NO segun corresponda `);

if (preguntacampoCero == "SI" || preguntacampoCero == "si" || preguntacampoCero == "sI" || preguntacampoCero == "Si") {

  campoCero = readline.question(`Porfavor dijite su nombre o Nickname `);

  if (campoCero == "") {

    console.log('no se ingreso NINGUN nombre gracias por participar');

  }
  else {

    console.log('hola, ' + campoCero, 'Soy un pequeño algoritmo que hace una suma basica de 2 sumandos y para iniciarla hacer,');

    campoOne = readline.question(`inicie digitando un numero o el sumando #1  `);

    campoTwo = readline.question(`Listo, ahora porfavor, digite el otro numero o el sumando #2  `);

    result = Number(campoOne) + Number(campoTwo);

    console.log("Deacuerdo, El resultado de la suma entre estos 2 sumandos ingresados es: " + result, 'Hasta pronto!');

  }

}

else {
  console.log("Como el Nombre o el Nickname es obligatorio y este NO se ingreso, el programa Finaliza... gracias por su tiempo");

} 