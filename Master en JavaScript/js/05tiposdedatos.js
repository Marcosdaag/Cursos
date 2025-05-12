'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;
var suma = numero1+numero2;
var resta = numero1-numero2;
var multiplicacion = numero1*numero2;
var division = numero1/numero2;
var resto = numero1%numero2;


alert("El resultado es: "+operacion);

// Tipos de datos
var numeroEntero = 44; // Number
var cadenaDeTexto = "String"; // String
var trueOrFalse = true; // Boolean

// Funciones para convertir datos

var numeroFalso = "49";

console.log(numeroFalso); // Me lo muestra en forma de string y no es apto para hacer operaciones matematicas
console.log(Number(numeroFalso)+7); // De esta manera paso el string a numero

// La diferencia entre Number y parseInt es que la primera opcion convierte cualquier tipo de numero y parseInt unicamente numeros enteros
console.log(parseInt(numeroFalso)+7);
console.log(parseFloat(numeroFalso)+7);

// Tambien lo tenemos de manera de pasar un numero a un string
console.log(String(numero1)+4); // De esta manera en consola se veria el numero uno y al lado el 4

console.log(typeof numero1); // Con el typeof podemos ver que tipo de dato posee la variable