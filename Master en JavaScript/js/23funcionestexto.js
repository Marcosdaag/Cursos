'use strict'

// Propiedades o metodos para transformar textos

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "Es buen curso";

//Pasar numero a string
numero.toString();

//Pasar texto a mayusculas
texto1.toUpperCase();

//Pasar texto a minusculas
texto2.toLowerCase();

//Calcular longitud (cuenta los espacios)
console.log(texto1.length);

frutas = ["Manzana", "Pera", "Uva", "Melon"];

console.log(frutas.length); //Me va a decir que hay 4 elementos

//Unir o concatenar textos

var textoTotal = texto1+texto2;
console.log(textoTotal);

//Tambien puedo concatenar de esta manera
texto1.concat(texto2);