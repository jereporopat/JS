let jugador2;
let vidas = 3;
let btnf;
let btnm;
let btnd;
let dificultad = "";
let numeroMax;
let numeroASumar = 0;
let score = 0;
let numeroIngresado;
let numeroRandom;
let mensaje;

//funcion para capturar datos desde html
function capturar(){
    var jugador1 = document.getElementById ("jugador1").value;
    if (jugador1 == " "){
        alert ("El nombre es obligatorio");
        document.getElementById ("jugador1").focus();
    }
    console.log (jugadores);
}
    btnf = document.getElementById ("btnf").addEventListener ("click", manejador);
    btnm = document.getElementById ("btnm").addEventListener ("click", manejador);
    btnd = document.getElementById ("btnd").addEventListener ("click", manejador);

    function manejador (e){
        if (!e) e = window.event;

        if (e.target.id = "btnf"){
            alert ("Facil");
        }
        if (e.target.id = "btnm"){
            alert ("Medio");
        }
        if (e.target.id = "btnm"){
            alert ("Dificil");
        }
    }



 /*   alert ("La dificultad seleccionada es: " + dificultad);
    switch(dificultad){
        case "F":
            numeroMax = 10;
            numeroASumar = 100;
        break;
        case "M":
            numeroMax = 30;
            numeroASumar = 150;
        break;
        case "D":
            numeroMax = 50;
            numeroASumar = 400;
            break;
        default:
            alert ("Dificultad ingresada incorrectamente");
    }
/*
    jugador1 = document.getElementById ("txtIdNombre");
    jugador1 = jugador1.toUpperCase ();
    jugadores = jugador1;
    alert (jugadores);

for (i = 0; i < 2; i++) {

dificultad = document.getElementById ("");


numeroRandom = getRandomInt(numeroMax);
alert ("Debe adivinar el número entre el 0 y el " + numeroMax);


do{    
    numeroIngresado = prompt ("Elija un numero del 0 al " + numeroMax);

    if(numeroIngresado == numeroRandom && jugadores == jugador1){
        alert ("Felicidades! " + jugador1 + " es un ganador");
        vidas = vidas + 3;
        jugador2 = prompt ("Ingrese jugador 2");
        jugador2 = jugador2.toUpperCase ();
        jugadores = jugador2;
        alert ("Es el turno de " + jugador2 + " suerte!");
        break;
    }
    if(numeroIngresado == numeroRandom && jugadores == jugador2){
        alert ("Felicidades! " + jugador2 + " es un ganador");
        break;
    }
    else{
        vidas --;
        alert ("Fallaste! Te quedan " + vidas + " vidas");
        alert ("El numero era: " + numeroRandom);
    }
}while (vidas>0);
if ( vidas <= 0 && jugadores == jugador1){
    alert ("Perdiste! " + jugador1 + " no tenes mas vidas.");
    alert ("El numero era: " + numeroRandom);
    jugador2 = prompt ("Ingrese jugador 2");
    jugador2 = jugador2.toUpperCase ();
    jugadores = jugador2;
    alert ("Es el turno de " + jugador2 + " suerte!");
    vidas = vidas + 3;
    }
    if ( vidas <= 0 && jugadores == jugador2){
        alert ("Perdiste! " + jugador2 + " no tenes mas vidas.");
        alert ("El numero era: " + numeroRandom);
        break;
        }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  score = score + numeroASumar;

  alert ("Usted obtuvo un puntaje de: " + score);

  //Lo que quiero hacer es guardar un historial en storage de jugadores que jugaron con su maximo de score y mostrarlo en una lista
  
  function historialDatos(){

    let jugadores = {
        nombre = "",
        maximoScoreObtenido = "",
    }
  };
  
  let nombre = "x";
  localStorage.setItem ("nombre", nombre);


 necesito ponerle puntajes a las dificultades y sumarlo en un total
 luego comparar ese score entre los dos jugadores y que haya un ganador*/