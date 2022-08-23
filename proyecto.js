let jugadores;
let jugador1;
let jugador2;
let vidas = 3;
let dificultad;
let numeroMax;
let numeroIngresado;
let numeroRandom;
let mensaje;

    jugador1 = document.getElementById ("txtIdNombre");
    jugador1 = jugador1.toUpperCase ();
    jugadores = jugador1;
    alert (jugadores);

for (i = 0; i < 2; i++) {

dificultad = document.getElementById ("");

switch(dificultad){
    case "F":
        numeroMax = 10;
    break;
    case "M":
        numeroMax = 30;
    break;
    case "D":
        numeroMax = 50;
        break;
    default:
        alert ("Dificultad ingresada incorrectamente");
}
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

// necesito ponerle puntajes a las dificultades y sumarlo en un total
// luego comparar ese score entre los dos jugadores y que haya un ganador