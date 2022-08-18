let nombre;
let edad;
let sexo;
let nota;
let respuesta;
let varonesAprobados = 0;
let notasMenores = 0;
let notaTotalMenores = 0;
let promedioMenores;
let notasMayores = 0;
let notaTotalMayores = 0;
let promedioMayores;
let mensaje;

do {
  nombre = prompt("Ingrese su nombre");
  nombre = nombre.toUpperCase();
  do {
    edad = prompt("Ingrese su edad");
    edad = parseInt(edad);
  } while (edad < 12 || edad > 19);

  do {
    sexo = prompt("Indique su sexo: F para femenino / M para masculino");
    sexo = sexo.toUpperCase();
  } while (sexo != "F" && sexo != "M");

  do {
    nota = prompt("Nota final");
    nota = parseInt(nota);
  } while (nota < 1 && nota > 10);

  if (nota > 6 && sexo == "M") {
    varonesAprobados++;
  }
  if (edad < 18) {
    notasMenores++;
    notaTotalMenores = notaTotalMenores + nota;
    promedioMenores = notaTotalMenores / notasMenores;
  }
  if (edad >= 18) {
    notasMayores++;
    notaTotalMayores = notaTotalMayores + nota;
    promedioMayores = notaTotalMayores / notasMayores;
  }
  if (sexo == "M") {
    notasMayores++;
    notaTotalMayores = notaTotalMayores + nota;
    promedioMayores = notaTotalMayores / notasMayores;
  }
  respuesta = prompt(
    "Desea seguir ingresando alumnos? indique S para si / N para no"
  );

  respuesta = respuesta.toLocaleUpperCase();
} while (respuesta == "S");

alert(promedioMayores);
