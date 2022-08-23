let nombre;
let edad;
let cantidadDeCarrerasGanadas;

let pilotoConMasGanadas = "";
let cantidadGanadas = 0;

let pilotoQueMenosGano = "";
let pilotoConMenosGanadas = 0;

let promedioEdad;
let edadTotal = 0;

let pilotosMayores = 0;

for (i = 0; i < 4; i++) {

 nombre = prompt ("Ingrese nombre del piloto");
 nombre = nombre.toUpperCase ();

 edad = prompt ("Ingrese edad del piloto");
 edad = parseInt (edad);

 cantidadDeCarrerasGanadas = prompt ("Ingrese la cantidad de victorias");
 cantidadDeCarrerasGanadas = parseInt (cantidadDeCarrerasGanadas);

  if (cantidadGanadas < cantidadDeCarrerasGanadas){

    pilotoConMasGanadas = nombre;
    cantidadGanadas = cantidadDeCarrerasGanadas;
  }
  if (pilotoConMenosGanadas > cantidadDeCarrerasGanadas || pilotoConMenosGanadas == 0){

    pilotoQueMenosGano = nombre;
    pilotoConMenosGanadas = cantidadDeCarrerasGanadas;
    
  }

  edadTotal = edadTotal + edad;
  promedioEdad = edadTotal / 5;

  if (edad > 25){
    pilotosMayores++;
  }
 
}


document.write ("El piloto con mas carreras ganadas es " + pilotoConMasGanadas + " la cantidad de carreras q gano son " + cantidadGanadas + "<br/>");
document.write ("El piloto con menos carreras ganadas es " + pilotoQueMenosGano + " la cantidad de carreras q gano son " + pilotoConMenosGanadas + "<br/>");
document.write ("El promedio de edad es de %" + promedioEdad + "<br/>");
document.write ("La cantidad de piolotos mayores es de " + pilotosMayores);








































/*
let nombre;
let edad;
let cantidadDeVictorias = 0;

let pilotoConMasVictorias = 0;
let nombreDelVictoria = "";

let pilotoConMenosVictorias = 0;
let nombreDelDerrota = "";

let promedioEdad;
let edadTotal = 0;

let pilotosMayores;

for (i = 0; i < 6; i++) {
  nombre = prompt("Ingrese su nombre");
  nombre = nombre.toUpperCase();

  edad = prompt("Ingrese su edad");
  edad = parseInt(edad);

  cantidadDeVictorias = prompt("Ingrese la cantidad de carreras ganadas");
  cantidadDeVictorias = parseInt(cantidadDeVictorias);

  if (pilotoConMasVictorias < cantidadDeVictorias) {
    nombreDelVictoria = nombre;
    pilotoConMasVictorias = cantidadDeVictorias;
  }
  if ((pilotoConMenosVictorias > cantidadDeVictorias) || pilotoConMenosVictorias ==0){

    nombreDelDerrota = nombre;
    pilotoConMasDerrotas = cantidadDeVictorias;
}
  if (edad > 24) {
    pilotosMayores++;
  }
  edadTotal = edadTotal + edad;
  promedioEdad = edadTotal / 5;
}
document.write(
  "El piloto con mas victorias es " + nombreDelVictoria + pilotoConMasVictorias);
document.write(
  "El piloto con menos victorias es " + nombreDelDerrota + pilotoConMenosVictorias);
document.write(
    "El promedio de edad es de " + promedioEdad);
document.write(
    "La cantidad de pilotos mayores a 25 es " + pilotosMayores);*/
