let jugador;
let vidas = 3;
let dificultad;
let numeroMax;
let numeroIngresado;
let numeroRandom;
let mensaje;


jugador = prompt ("Ingrese nombre del jugador");
dificultad = prompt ("Seleccione la dificultad para empezar el juego (F = facil / M = medio / D = dificil");
switch(dificultad){
    case 'F':numeroMax = 10; break;
    case 'M':numeroMax=30;break;
    case 'D':numeroMax=50;break;
    default:alert ("Dificultad ingresada incorrectamente");

}
numeroRandom = getRandomInt(numeroMax);
alert ("Debe adivinar el número entre el 0 y el " + numeroMax);


do{    
    numeroIngresado = prompt ("Elija un numero del 0 al " + numeroMax);

    if(numeroIngresado == numeroRandom){
        alert ("Felicidades! " + jugador + " es un ganador");
        break;
    }
    else{
        vidas --;
        alert ("Fallaste! Te quedan " + vidas + " vidas");
    }
}while (vidas>0);
if ( vidas <= 0){
    alert ("Perdiste! " + jugador + " no tenes mas vidas.");
    
    alert ("El numero era: " + numeroRandom);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }