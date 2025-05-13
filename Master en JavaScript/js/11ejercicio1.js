'use strict'

/* 
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/

do{
    var numero1 = parseInt(prompt("Introduci el numero1", 0));
    var numero2 = parseInt(prompt("Introduci el numero2", 0));
}while(numero1 <= 0 || isNaN(numero1) || numero2 <= 0 || isNaN(numero2))

 if(numero1 < numero2){
    alert("El numero "+numero1+" es menor que "+numero2);
 }else if(numero2 < numero2){
    alert("El numero "+numero2+" es menor que "+numero1);
 }else{
    alert("Los numeros son iguales");
 }