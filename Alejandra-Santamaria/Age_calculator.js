alert("Hola Mundo")

function validators(){
    let isValid= true;
    let month = document.getElementById("Month").value-1;
    let year = document.getElementById("Year").value;
    let day = document.getElementById("Day").value;
    let userDate=new Date(year, month, day);
    let today = new Date();

    today.setHours(0,0,0,0);

    if(day <0 || day >31){
        alert("Por favor digite un día valido")
        isValid=false;
    }
    if (month < 1 || month >12){
        alert("Por favor digite un mes valido")
        isValid=false;
    }
    if(userDate >= today) {
alert("Esta persona todavia no ha nacido");
        isValid=false;
}
    if(isValid){
        calculator_age(year,month,day);
    }else{
        alert("Por favor valide los datos")
    }
}

function calculator_age(year,month,day){
let age = new Date(year, month, day)
let date = Date.now() - age.getTime();
let years = new Date (date);

document.getElementById("Result").innerHTML = "Tu tienes " + Math.abs(years.getUTCFullYear() - 1970) + " Años" 

}
