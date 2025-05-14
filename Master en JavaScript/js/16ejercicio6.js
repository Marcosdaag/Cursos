'use strict'

/* 
Que nos diga si un numero es par o impar.
1 Ventana prompt
2 Si no es valido el numero que nos lo pida de nuevo
*/

do {
    var number = prompt(parseInt("Ingresa tu numero mayor a 0", 0));
}while(isNaN(number || number<=0))

if(number%2 != 0){
    alert("El numero "+number+" es impar.");
}else{
    alert("El numero "+number+" es par.");
}