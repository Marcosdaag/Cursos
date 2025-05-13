'use strict'

/* 
El condicional siwtch sirve para comprobar una variable y dependiendo de su valor puedo asignar distintas funciones 
*/

var edad = 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Recien cumpliste la mayoria de edad";
    break;

    case 25:
        imprime = "Ya eres un adulto";
    break;

    default:
        imprime = "Tu edad es neutra";
    break;
}

console.log(imprime);
/* 
En este caso creo un switch que comprueba la variable de edad y en los distintos casos 18 o 25 modifica la variable imprime y despues hago un console.log de esa misma variable. 
El caso default aplica a todos los demas valores que no sean los nombrados arriba.
*/