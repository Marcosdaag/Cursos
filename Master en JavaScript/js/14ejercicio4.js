'use strict'

/* 
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1= parseInt(prompt("Introduci el numero 1", 0));
var numero2 = parseInt(prompt("Introduci el numero 2", 0));

for(var i = numero1; i<numero2; i++){
    if(i%2 != 0){
        console.log(i);
    }
}