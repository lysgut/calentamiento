let combination = ['n','n']
let botonesI = document.querySelectorAll(".mine");
let botonesD = document.querySelectorAll(".real");
let mezclarBotton = document.getElementById("mezclar");
let reiniciar = document.getElementById("reiniciar")
let puntajeText = document.getElementById('puntaje')
let puntaje = 0


function seleccionadoHacer(x){
    let elemento = ""
    switch (x) {
        case "1":
            elemento = "oro"
            break;
        case '2':
            elemento = "hierro"
            break;
        case '3':
            elemento = "redstone"
            break;
        case '0':
            elemento = 'diamante'
            break;
        default:
            break;
    }
    return elemento
}
let minecraft = [
    {
        url: 'https://tse1.mm.bing.net/th/id/OIP.Bbxg0MzSY3IC8cKKisieGAAAAA?rs=1&pid=ImgDetMain',
        id: '0i',
        value: '0'
    },
    {
        url: 'https://tse1.mm.bing.net/th/id/OIP.KYkR19B0B0X6Md5FtlsfewAAAA?rs=1&pid=ImgDetMain',
        id: '1i',
        value: '1'
    },
    {
        url: 'https://tse3.mm.bing.net/th/id/OIP.191lHaRzPklSLvjjVHPSEAAAAA?rs=1&pid=ImgDetMain',
        id: '2i',
        value: '2'
    },
    {
        url:'https://tse4.mm.bing.net/th/id/OIP.fie5NHyvlU5EnfJQ6X0IfwAAAA?rs=1&pid=ImgDetMain',
        id: '3i',
        value: '3'
    }
]


    let real = [
    {
        url: 'https://www.pawnshop.es/wp-content/uploads/2018/12/diamond-500872_1280.jpg',
        id: '0d',
        value: '0'
    },
    {
        url: 'https://tse4.mm.bing.net/th/id/OIP.j7d7ScSqV6PyboRJSxqL5QHaGH?rs=1&pid=ImgDetMain',
        id: '1d',
        value: '1'
    },
    {
        url:'https://th.bing.com/th/id/R.f9d3c06d4fa79b01f7a61b45622d694d?rik=hVbDJb1J9JoSFQ&pid=ImgRaw&r=0',
        id: '2d',
        value: '2'
    },
    {
        url:'https://mineralesyrocas.com/wp-content/uploads/rubi.jpg',
        id: '3d',
        value: '3'
    }]
   

  function mix(arreglo) {
    arreglo.sort(function() {
      return Math.random() - 0.5;
    });
  }





mezclarBotton.addEventListener("click", function(){
    puntajeText.innerText = puntaje
mix(minecraft)
mix(real)

botonesI.forEach(function(botonI, i) {
    let materialI = minecraft[i];
    botonI.querySelector("img").src = materialI.url;
    botonI.id = materialI.id;
    botonI.value = materialI.value;
});


botonesD.forEach(function(botonD, i) {
    let materialD = real[i];
    botonD.querySelector("img").src = materialD.url;
    botonD.id = materialD.id;
    botonD.value = materialD.value;
});

})
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


reiniciar.addEventListener("click", function() {
    location.reload();
});

function checkCombination(){
    if(combination[0] != 'n' && combination[1] != 'n'){
        if(combination[0] === combination[1]){
            alert("Bien hecho!  😁😁😁😁🤩💯💯")
            combination = ['n','n']
            puntaje += 100
            puntajeText.innerText = puntaje
            return true
        }
        else{
            alert("Respuesta incorrecta ❌❌🚫 Sigue Intentando ")
            combination = ['n','n']
            puntaje -= 100
            puntajeText.innerText = puntaje
            return false
        }

    }
}