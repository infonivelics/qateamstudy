const readline = require('readline-sync');

console.log("Hola Mundo. y buenos dias...");

  preguntacampoCero = readline.question(`Para iniciar, porfavor Dijite su nombre o nickname `);

  if(preguntacampoCero =! ""){

    console.log('hola, '+ preguntacampoCero, 'Soy un pequeño algoritmo que hace una suma basica de 2 sumandos y para iniciarla hacer,');
    
      campoOne = readline.question(`inicie digitando un numero o el sumando #1  `);
    
      campoTwo = readline.question(`Listo, ahora porfavor, digite el otro numero o el sumando #2  `);
        
    result = Number(campoOne) + Number(campoTwo);
    
    console.log("Deacuerdo, El resultado de la suma entre estos 2 sumandos ingresados es: " + result, 
    'Hasta pronto!');

  }

  else{
console.log("el programa a finalizado");

  }