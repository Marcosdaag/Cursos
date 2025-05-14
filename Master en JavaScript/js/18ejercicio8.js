'use strict'

/* 
Calculadora
-Pida dos numeros por pantalla
-Si metemos uno mal que nos lo vuelva a pedir
-Mostrar por alerta, la suma, resta, multiplicacion y division
*/

var number1 = parseInt(prompt("Introduci el primer numero",0));
var number2 = parseInt(prompt("Introduci el primer numero",0));

while(isNaN(number1) || isNaN(number2)){
    var number1 = parseInt(prompt("Introduci el primer numero",0));
    var number2 = parseInt(prompt("Introduci el primer numero",0));
}

var resultado = "La suma es "+(number1+number2)+" \n"+
                         "La resta es "+(number1-number2)+" \n"+
                         "La multiplicacion es "+(number1*number2)+" \n"+
                         "La division es "+(number1/number2)+" \n";  

alert(resultado);