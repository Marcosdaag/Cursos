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

//Funciones para la busqueda dentro de un texto

var busqueda = texto1.indexOf("curso");
console.log(busqueda);//Muestra en que caracter se encuenta la primer coincidencia

var busqueda2 = texto1.lastIndexOf("cruso");//Muestra cual es la ultima coincidencia de la palabra

 /* 
 Hay otros metodos de busqueda como
 .search
 .match (me devuelve un array de todos los resultados)
 IMPORTANTE AL PONER EL MATCH la palabra abuscar tendrai que estar entra barras /curso/g
.subsrt //Saca una parte del texto desd eel caracter inicial y cuantos carateres quiero sacar (14,5)
.charAt me saca un caracter en especifico
.startsWith me devuelve true o false dependiendo si encuentra una frase que empiece con esa palabra
.endsWith
.includes
 */


// FUNCIONES PARA REEMPLAZAR TEXTO

texto1.replace("curso", "cursito");
texto1.slice(40, 60);//Corta el string y empieza en el caracter 14 y termina en 22 o hasta el final
texto1.split(" ");//Nos da una coleccion que en este caso esta separada por los espacios del texto " "
texto1.trim();//Me saca los espacios por adelante y por atras del texto
