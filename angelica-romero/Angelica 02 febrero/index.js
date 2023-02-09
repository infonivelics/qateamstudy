

function generate(){
    document.getElementById("numOne").value = parseInt(Math.random() * 10);
    document.getElementById("numTwo").value = parseInt(Math.random() * 10);
    if(document.getElementById("numOne").value == document.getElementById("numTwo").value){
        alert("Los numero ahora son iguales");
    }
}





