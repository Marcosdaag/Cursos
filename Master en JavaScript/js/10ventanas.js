'use strict'

// ALERTA

alert("hola");

// ALERTAS DE CONFIRMACION

confirm("Estas seguro de continuar?");

// Si lo pongo dentro de una variable puedo ver el resultado

var miResultado = confirm("Sos mayor de edad?");
console.log(miResultado);

// VENTANA DE INGRESO DE DATOS
var resultado = prompt("Que edad tenes?", 0); 
console.log(resultado);

// En este caso pido un dato y lo guardo en una variable pero hay que tener en cuenta que lo que ingresemos siempre va a ser recibido como un string