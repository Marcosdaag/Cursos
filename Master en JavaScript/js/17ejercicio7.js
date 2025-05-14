'use strict';

/* 
Tabla de multiplicar de un numero introducido por pantalla
*/

let table;

do {
    table = parseInt(prompt("Ingresa la tabla que quieres ver"), 10);
} while (isNaN(table) || table <= 0);

document.write("<h1>Tabla de multiplicar del " + table + "</h1>");

for (let i = 0; i <= 10; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br/>");
}

// Todas las tablas de multipicar 

for(var j=0; j<=10; j++){
    document.write("<h1>Tabla de multiplicar del "+j+"</h1>");
    for(var l=0; l<=10; l++){
        document.write(j+"X"+l+"= "+(j*l)+"<br/>");
    }
}