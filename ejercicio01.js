let tituloPelicula;
let genero;
let puntuacion;

let peorPeliculaDrama = 5;
let tituloPeorPelicula = "";

let mejorPelicula = 0;
let tituloMejorPuntuacion = "";

let contadorPeliculas = 0;
let contadorDrama = 0;
let porcentajeDrama = 0;
let contadorCienciaFiccion = 0;
let porcentajeCienciaFiccion = 0;
let contadorTerror = 0;
let porcentajeTerror = 0;

let cienciaFiccion = 0;

do {
  tituloPelicula = prompt("Ingrese el titulo de la pelicula");
  tituloPelicula = tituloPelicula.toUpperCase();
  do {
    genero = prompt(
      "Ingrese el genero de la pelicula",
      "ciencia ficcion - terror- drama"
    );
    genero = genero.toLowerCase();
  } while (
    genero != "ciencia ficcion" &&
    genero != "terror" &&
    genero != "drama"
  );
  do {
    puntuacion = prompt(
      "Ingrese la puntuacion ",
      "1 - muy mala; 2 - mala ; 3 - buena; 4 - muy buena; 5 - excelente"
    );
    puntuacion = parseInt(puntuacion);
  } while (
    puntuacion != 1 &&
    puntuacion != 2 &&
    puntuacion != 3 &&
    puntuacion != 4 &&
    puntuacion != 5
  );

  respuesta = prompt("Desea seguir ingresando peliculas?", "SI / NO");
  respuesta = respuesta.toUpperCase();

  if (peorPeliculaDrama > puntuacion && genero == "drama") {
    peorPeliculaDrama = puntuacion;
    tituloPeorPelicula = tituloPelicula;
  }

  if (mejorPelicula < puntuacion) {
    mejorPelicula = puntuacion;
    tituloMejorPuntuacion = tituloPelicula;
  }
  if (puntuacion > 3 && genero == "ciencia ficcion") {
    cienciaFiccion++;
  }
  contadorPeliculas++;

  switch (genero) {
    case "drama":
      contadorDrama++;
      break;
    case "ciencia ficcion":
      contadorCienciaFiccion++;
      break;
    default: //mejor con case
      contadorTerror++;
  }
} while (respuesta == "SI");

porcentajeDrama = (contadorDrama * 100) / contadorPeliculas;
porcentajeCienciaFiccion = (contadorCienciaFiccion * 100) / contadorPeliculas;
porcentajeTerror = (contadorTerror * 100) / contadorPeliculas;

document.write(
  "La peor pelicula de drama es " +
    tituloPeorPelicula +
    " con una puntuacion de " +
    peorPeliculaDrama +
    "<br/>"
);
document.write("La mejor pelicula es " + tituloMejorPuntuacion + "<br/>");
document.write(
  "La cantidad de peliculas del genero ciencia ficcion mayor a 3 puntos es " +
    cienciaFiccion +
    "<br/>"
);
document.write(
  "El porcentaje de peliculas de drama ingresadas es de " +
    porcentajeDrama +
    " la cantidad de peliculas de ciencia ficcion es " +
    porcentajeCienciaFiccion +
    " La cantidad de peliculas de terror es de " +
    porcentajeTerror +
    "<br/>"
);
