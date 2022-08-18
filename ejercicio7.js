let nota;
let sexo;
let promedio;
let mensaje;
let totalNotas = 0;
let notaMasBaja = 10;
let cantidadDeVarones = 0;
let totalvarones;

for (i = 0; i < 5; i++) {
  do {
    nota = prompt("Ingrese su nota");
    nota = parseInt(nota);

    if (notaMasBaja > nota) {
        alert (nota);
      notaMasBaja = nota;
      alert (notaMasBaja);
    }
    if (sexo == "M" && nota >= 6){
        cantidadDeVarones++;
        totalvarones = cantidadDeVarones;
    }

  } while (nota > 10 || nota < 0);


  do {
    sexo = prompt("ingrese sexo: F para femenino / M para masculino");
    sexo = sexo.toLocaleUpperCase();
  } while (sexo != "F" && sexo != "M");

  totalNotas = totalNotas + nota;
}

promedio = totalNotas / 5;

alert("El promedio total de notas es: " + promedio);
alert("La nota mas baja es " + notaMasBaja + " y pertenece al genero " + sexo);
alert ("La cantidad de varones con nota mayor a 6 son: " + totalvarones);
