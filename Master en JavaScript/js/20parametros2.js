'use strict'

// Paramestros rest y spread

// REST
// Al usar tres puntos y el nombre de una variable, hago que todos los parametros que quiera agregar a la lista y sean indefinidos puedo agregarlos todos dentro de la misma variable en forma de array
function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log(fruta1);
    console.log(fruta2);
    console.log(restoFrutas); // [Sandia, Banana, Uva]
}

listadoFrutas("Manzana", "Naranja", "Sandia", "Banana", "Uva");


// En este caso creo un array de frutas y lo asigno como "primer parametro" pero si le pongo tres puntos al nombrar ese array dentro de la funcion hacemos que esas dos frutas se separen y tomen los dos parametros fruta1 y fruta2, entonces el array frutas que contiene esos dos elementos los separa y los asigna por separado como parametros
var frutas = ["Naranja", "Manzana"];

listadoFrutas(...frutas, "Sandia", "Frutilla", "Arandano", "Ciruela");