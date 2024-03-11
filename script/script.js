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
//0 diamante , 1 oro, 2 plata, 3 
let minecraft = [
    {
        url: 'https://www.pngall.com/wp-content/uploads/2016/03/Minecraft-Diamond-PNG.png',
        id: '0i',
        value: '0'
    },
    {
        url: 'https://lh3.bunny.novaskin.me/xGMFMIfzD9ys7L26Z-0C6Vd_2aVq8gXa3qjp-6XDkrzEvBdcStXVcOg33xu9Jm80uD5bfUNqzNxdbUaHY4JV7dL3lmZzHlBkNaHD=rw-h400',
        id: '1i',
        value: '1'
    },
    {
        url: 'https://tekkitwiki.com/w/images/tekkitwiki/6/6b/Grid_Iron_Ingot.png',
        id: '2i',
        value: '2'
    },
    {
        url:'https://tekkitwiki.com/w/images/tekkitwiki/thumb/a/af/Redstone_Dust.png/208px-Redstone_Dust.png',
        id: '3i',
        value: '3'
    }
]


    let real = [
    {
        url: 'https://i.pinimg.com/originals/73/04/6e/73046e2b5eaf644fe5f52f05bd3f7e77.png',
        id: '0d',
        value: '0'
    },
    {
        url: 'https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/10-Lingote-de-oro.png',
        id: '1d',
        value: '1'
    },
    {
        url:'https://satisfactory.wiki.gg/images/5/5f/Iron_Rod.png',
        id: '2d',
        value: '2'
    },
    {
        url:'https://static.vecteezy.com/system/resources/previews/027/125/671/original/red-ruby-diamond-isolated-on-transparent-background-precious-stone-jewelry-generative-ai-png.png',
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