'use strict'

/* 
Programa que muestre todos los numeros divisores de un numero introducido en un prompt
*/

var numero1= parseInt(prompt("Introduci el numero 1", 1));

for(var i = 1; i<= numero1; i++){
    if(numero1%i == 0){
        console.log(i+" es divisor de "+numero1);
    }
}