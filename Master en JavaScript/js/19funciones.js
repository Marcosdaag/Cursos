'use strict'

// Funciones, bloque de instrucciones que se ejecutan cada vez que se llama

// Le definimos el nombre y la instruccion a ejecutar
function calculadora(){
    console.log("Hola");
}

// Invocar o llamar a la funcion
calculadora();


// De esta manera agrego parametros a una funcion
function sumar(numero1, numero2){
    console.log(numero1+numero2);
}

// Aca llamo a la funcion y le doy los dos para metros que tiene la funcion sumar
sumar(89, 110);


// PARAMETROS OPCIONES, estos vienen inicializados con un valor y pueden ser modificados o no al momento de llamar a la funcion

function multiplicar(number1, number2, mostrarConsola = false){
    if(mostrarConsola == true){
        console.log(number1*number2);
    }else{
        document.write(number1*number2);
    }
}

// Si llamamos la funcion multiplicar y le asignamos los dos primeros parametros unicamente va a escribir en el documento su resultado
multiplicar(8, 8);

// En cambio si le asignamos un mostrar consola true, el resultado se va a mostrar por la consola
multiplicar(8, 10, true);


// Funciones dentro de otras funciones

function dividirConsola(n1, n2){
    console.log(n1/n2);
}

function dividirDocumento(n1, n2){
    document.write(n1/n2);
}

function calculadoraDividir(nm1, nm2, mostrar = false){
    if(mostrar ==false){
        dividirConsola(nm1, nm2);
    }else{
        dividirDocumento(nm1, nm2);
    }
}