//trabajo de 2 campos consus respectivas validaciones
const readline = require('readline-sync');

console.log("Hola Mundo y buenos dias...");

preguntacampoCero = readline.question(`PASO1: Desea darnos su Nombre o Nickname? marque SI / NO segun corresponda `);

if (preguntacampoCero == "SI" || preguntacampoCero == "si" || preguntacampoCero == "sI" || preguntacampoCero == "Si") {

  campoCero = readline.question(`PASO 2: Porfavor dijite su nombre o Nickname `);

  if (campoCero == "") {

    console.log('No se ingreso NINGUN nombre, para continuar con el proceso, vuelva a intentarlo desde el paso 1. !Gracias!');

  }
  else {

    console.log('PASO 3: hola, ' + campoCero, 'Soy un pequeño algoritmo que hace una suma basica de 2 sumandos y para iniciarla hacer,');

    campoOne = readline.question(`inicie digitando un NUMERO o el sumando #1  `);

    if (!campoOne.match(/^\d+$/)) {

      console.log('El dato ingresado No es un Numero valido, vuelva a intentarlo desde el paso 1. !Gracias!');

    }
    else {

      campoTwo = readline.question(`PASO 4: Listo, ahora porfavor, digite el otro NUMERO o el sumando #2  `);

      if (!campoTwo.match(/^\d+$/)) {

        console.log('El dato ingresado No es un Numero valido, vuelva a intentarlo desde el paso 1. !Gracias!');

      }

      else {

        result = Number(campoOne) + Number(campoTwo);

        console.log("RESULTADO: El producto de la suma entre estos 2 sumandos ingresados es: " + result, 'Hasta pronto!');

      }
    }
  }
}

else {
  console.log("Como el Nombre o el Nickname es obligatorio y no se ingreso una opcion valida, el programa Finaliza... gracias por su tiempo");

} 