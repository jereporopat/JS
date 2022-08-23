let tipo;
let marca;
let cantidad;
let respuesta;

let lapiz;
let lapicera;
let fibra;

let totalPrecio;
let totalParcial;
let carrito;
let descuento;

do {
    do {
        tipo = prompt ("Ingrese el producto que desea comprar" , "lapiz / fibra / lapicera");
        tipo = tipo.toLowerCase ();
    } while (tipo != "lapiz" && tipo != "fibra" && tipo != "lapicera");

        marca = prompt ("Ingrese la marca del producto");
        marca = marca.toLowerCase;

        cantidad = prompt ("Ingrese la cantidad de productos");
        cantidad = parseInt (cantidad);

        switch (tipo) {
            case "lapiz":
                totalParcial = 50 * cantidad;
                break;
            case "fibra":
                totalParcial = 60 * cantidad;
                break;
            case "lapicera":
                totalParcial = 70 * cantidad;
                break;
        }
        carrito = carrito + cantidad;
        totalPrecio += totalParcial;


     
    

    respuesta = prompt ("Desea seguir ingresando productos?" , "si / no");
    respuesta = respuesta.toLowerCase ();
} while (respuesta == "si");

if(carrito >= 6){
    descuento = totalPrecio * 0,15;
}
if(carrito >= 8){
    descuento = totalPrecio * 0.20;
}
if(carrito >= 15){
    descuento = totalPrecio * 0.35;
}

document.write ("El total es de " + totalPrecio);