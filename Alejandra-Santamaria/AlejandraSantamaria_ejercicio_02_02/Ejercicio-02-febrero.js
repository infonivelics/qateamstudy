let intentos =0;

function ValidarPassword (){
let password = document.getElementById("password").value;
console.log ("Prueba" + password);

if (password== "Prueba"){
    alert("Bienvenido");
    }

else {
alert("Contraseña invalida, por favor digite nuevamente la contraseña");
intentos++;
}
if (intentos >=3){
    alert("Tu cuenta ha sido bloqueado porque superaste los 3 intentos de contraseña");
    document.getElementById("password").disabled = true;
    document.getElementById("boton-validar").disabled = true;
    document.getElementById("validate").innerHTML = "Tu cuenta ha sido bloqueada";
    document.getElementById("validate").style.color = "red";
    }

}