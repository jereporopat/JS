let jugador2;
let jugador1;
let jugadores;
let vidas1 = 3;
let vidas2 = 3;
let btnf;
let btnm;
let btnd;
let dificultad = "";
let numeroMax;
let numeroASumar = 0;
let score1 = 0;
let score2 = 0;
let numeroIngresado;
let numeroRandom;
let mensaje;

//funcion para capturar datos desde html
function capturar1(){
    jugador1 = document.getElementById ("jugador1").value;
    if (jugador1 == " "){
        alert ("El nombre es obligatorio");
        document.getElementById ("jugador1").focus();
    }
    console.log (jugador1);
}
function capturar2(){
    jugador2 = document.getElementById ("jugador2").value;
    if (jugador2 == " "){
        alert ("El nombre es obligatorio");
        document.getElementById ("jugador2").focus();
    }
    console.log (jugador2);
}
    btnf = document.getElementById ("btnf").addEventListener ("click", manejador);
    btnm = document.getElementById ("btnm").addEventListener ("click", manejador);
    btnd = document.getElementById ("btnd").addEventListener ("click", manejador);

function manejador (e){

    if (e == "btnf"){
            swal ("La dificultad seleccionada es facil");
            numeroMax = 10;
            numeroASumar = 100;
    }
    if (e == "btnm"){
            swal ("La dificultad seleccionada es medio");
            numeroMax = 30;
            numeroASumar = 150;
    }
    if (e == "btnd"){
            swal ("La dificultad seleccionada es dificil");
            numeroMax = 50;
            numeroASumar = 400;
    }
    }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    
function jugar1 (){    

    if (vidas1 > 0){
       numeroRandom = getRandomInt(numeroMax);
        swal ("Debe adivinar el número entre el 0 y el " + numeroMax);
        
        numeroIngresado = prompt ("Elija un numero del 0 al " + numeroMax);
        
            if(numeroIngresado == numeroRandom){
                swal ("Felicidades! " + jugador1 + " es un ganador");
                score1 = score1 + numeroASumar;
            }else{
                    vidas1 --;
                    swal ("Fallaste! Te quedan " + vidas1 + " vidas, el numero era: " + numeroRandom);
                }
    }else{
            if(vidas1 == 0 && numeroIngresado != numeroRandom){
                swal ("Te quedaste sin vidas! Tu puntaje es de: " + score1);
            }
        }
}
function jugar2 (){    

    if (vidas2 > 0){
          numeroRandom = getRandomInt(numeroMax);
          swal ("Debe adivinar el número entre el 0 y el " + numeroMax);
      
          numeroIngresado = prompt ("Elija un numero del 0 al " + numeroMax);
      
              if(numeroIngresado == numeroRandom){
                  
                  swal ("Felicidades! " + jugador2 + " es un ganador");
                  score2 = score2 + numeroASumar;
              }
              else{
                  vidas2 --;
                  swal ("Fallaste! Te quedan " + vidas2 + " vidas, el numero era: " + numeroRandom);
              }
      }else{
          if(vidas2 == 0 && numeroIngresado != numeroRandom){
              swal ("Te quedaste sin vidas! Tu puntaje es de: " + score2);
          }
      }
}
function ganador(){

    if (score1 > score2){
        swal ("El ganador es: "+ jugador1 + " con un puntaje de: " + score1 + ". El jugador: " + jugador2 + " obtuvo un puntaje de: " + score2);
    }else{
        swal ("El ganador es: "+ jugador2 + " con un puntaje de: " + score2 + ". El jugador: " + jugador1 + " obtuvo un puntaje de: " + score1);
    }
}