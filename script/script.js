let combination = [0,0]

let minecraft = []


var botonesI = document.querySelectorAll(".mine");
var botonesD = document.querySelectorAll(".real");

function checkCombination(){
    if(combination[0] != 0 && combination[1] != 0){
        if(combination[0] === combination[1]){
            alert("Bien hecho!  😁😁😁😁🤩💯💯")
            combination = [0,0]
            return true
        }
        else{
            alert("Respuesta incorrecta ❌❌🚫 Sigue Intentando ")
            combination = [0,0]
            return false
        }

    }
}
botonesI.forEach(function(botonI) {
  botonI.addEventListener("click", function() {
    combination[0] = botonI.value;
    console.log(combination)
    if(checkCombination()){
        document.getElementById(botonI.value + "d").style.display = "none"
        botonI.style.display = "none"

    }

  });
});

botonesD.forEach(function(botonD) {
    botonD.addEventListener("click", function() {
        combination[1] = botonD.value;
        console.log(combination)
        if(checkCombination()){
            document.getElementById(botonD.value + "i").style.display = "none"
            botonD.style.display = "none"
        }
    });
  });