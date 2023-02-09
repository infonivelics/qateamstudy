alert("Hola mundo")

function cambio_contrasena(){

    let contrasena1 = document.getElementById("Contrasena1").value
    let contrasena2 = document.getElementById("Contrasena2").value

    console.log(contrasena1)
    console.log(contrasena2)
    if(contrasena1 != contrasena2) {

        alert("La contraseña deben de coincidir");  
        document.getElementById("Validar").innerHTML = "Tu contraseña no es correcta" 
            return false;
        }
    else {
        alert("Todo esta correcto");    
         
          document.getElementById("Validar").innerHTML = "Tu contraseña es correcta" 
          return true;
        }



    }

    let i=0
    function cambio_contrasena(){
        let contrasena1 = document.getElementById("Contrasena1").value;
        let contrasena2 = document.getElementById("Contrasena2").value;
        console.log(contrasena1);
        console.log(contrasena2);
        if(contrasena1 == contrasena2) {
            alert("Todo esta correcto");
            document.getElementById("Validar").innerHTML = "Tu contraseña es correcta";
            document.getElementById("Validar").style.color = "green";
        }
        else {
            alert("Las contraseñas deben de coincidir");
            document.getElementById("Validar").innerHTML = "Tu contraseña no es correcta";
            document.getElementById("Validar").style.color = "yellow";
            i++;
        }
        if(i>=3){
            bloqueo();
        }
    }
    function bloqueo(){
        alert("Se han superado los intentos de ingreso de contraseña, intente mas tarde");
            document.getElementById("Contrasena1").disabled = true;
            document.getElementById("Contrasena2").disabled = true;
            document.getElementById("boton-contrasena").disabled = true;
            document.getElementById("Validar").innerHTML = "Intente de nuevo mas tarde";
            document.getElementById("Validar").style.color = "red";
    }
