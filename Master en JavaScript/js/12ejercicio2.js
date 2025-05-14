'use strict'

/* 
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var numberCount = 0;

do{
    var numero = parseInt(prompt("Introduci el numero, hasta un numero negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        numberCount ++;
    }
}while(numero >=0)


alert("La suma de los numeros introducidos es "+suma+" y su media es "+(suma/numberCount));