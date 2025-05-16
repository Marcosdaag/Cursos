'use strict'

/* 
1 pida seis numeros por pantalla y los meta en un array
2 mostrar el array entero en el cuerpo de la pagina y en la consola
3 ordenar y mostrarlo
4 invertir su orden y mostrarlo
5 mostrar cuantos elementos tiene el array
6 busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

//Pedir seis numeros y meterlos en un array
var numeros = new Array(6);

for(var i = 0; i<5; i++){
    numeros[i] = parseInt(prompt("Ingresa un numero", 0));
    while(isNaN(ingreso)){
        numeros[i] = parseInt(prompt("Ingresa un numero", 0));
    }
}

//Mostrar el array entero en el cuerpo de la pagina y consola
document.write(numeros);
console.log(numeros);

//Ordenarlo y mostrarlo
console.log(numeros.sort());

//Invertir el orden y mostrarlo
console.log(numeros.reverse());

//Mostrar cuantos elementos tiene el array
console.log(numeros.length);

//Busqueda de un valor pedido por el usuario, que nos diga si lo encuentra y en que indice esta