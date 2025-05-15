'use strict'

//Plantillas de texto

var nombre = prompt("mete tu nombre");
var apellidos = prompt("metetus apellidos");

//Podria hacer una variable que junte los nombres y apellidos normalmente pero tambien puedo hacerlo en forma de plantilla

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);