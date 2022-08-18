/*Ejercicio 3

Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro 
de la venta diaria de cafés, medialunas y churros.

Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el producto con más unidades vendidas.
c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
e) Informar cuál fue el producto menos vendido para poder sacarlo de la venta.
ejercicio 3 - Poropat Jeremias
*/

let cliente;
let tipo;
let respuesta;
let cantidad;
let descuento;

let cantCafe;
let cantMedialuna;
let cantChurro;

let cantCafeTotal;
let cantMedialunaTotal;
let cantChurroTotal;

let productoConMasUnidadesVendidas = 0;
let productoMasVendido ="";

let clienteMayor = "";
let productoConMasUnidadesVendidasCliente = 0;
let productoMasVendidoCliente ="";

do {
    do {

        cliente = prompt ("Nombre del cliente");
        cliente = cliente.toUpperCase ();

        tipo = prompt("Que desea comprar?" , "CAFE / MEDIALUNA / CHURRO");
        tipo = tipo.toUpperCase ();

        cantidad = prompt ("Cuanto desea comprar?");
        cantidad = parseInt (cantidad);

        respuesta = prompt ("Desea seguir comprando?" , "SI / NO");
        respuesta = respuesta.toUpperCase ();

        switch (tipo){
            case "CAFE":cantCafe ++;break;
            case "MEDIALUNA": cantMedialuna++; break;
            case "CHURRO": cantChurro++;break;
        }        
    } while (respuesta == "SI");
    cantCafeTotal +=cantCafe;
    if (productoConMasUnidadesVendidas < cantCafeTotal) {
        productoMasVendido = "CAFE";
    }
    cantMedialunaTotal +=cantMedialuna;
    if (productoConMasUnidadesVendidas < cantMedialunaTotal) {
        productoMasVendido = "MEDIALUNA";
    }
    cantChurroTotal += cantChurro;
    if (productoConMasUnidadesVendidas < cantChurroTotal) {
        productoMasVendido = "CHURRO";
    }


    if (productoConMasUnidadesVendidasCliente < cantCafeTotal) {
        productoMasVendidoCliente = "CAFE";
        clienteMayor = cliente;
    }
    if (productoConMasUnidadesVendidasCliente < cantMedialunaTotal) {
        productoMasVendidoCliente = "MEDIALUNA";
        clienteMayor = cliente;
    }
    if (productoConMasUnidadesVendidasCliente < cantChurroTotal) {
        productoMasVendidoCliente = "CHURRO";
        clienteMayor = cliente;
    }
    
respuesta = prompt ("Desea ingresar una nueva compra?" , "SI / NO");
respuesta = respuesta.toUpperCase ();
}
while (respuesta == "SI");

document.write ("Se compraron " + cantMedialunaTotal + "<br/>");
document.write ("El producto que mas se vendio es " + productoMasVendido + "<br/>");
document.write ("Nombre del cliente, y tipo de producto con mayor cantidad de compras " + clienteMayor + productoMasVendidoCliente);