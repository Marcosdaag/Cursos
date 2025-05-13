'use strict'

// El bucle while se ejecuta una cantidad de veces infinita siempre y cuando se cumpla una condicion

var year = 2018;

while(year <= 2051){
    console.log("Estamos en el año: "+ year)
    year++;
}

// El bucle do while se ejecuta al menos una vez y despues si comprueba si la condicion se cumple

var years = 20;

do{
    alert("estamos en years 20");
}while(years != 20)

// De esta forma lanzo una alerta y cada vez que years sea distinto a 20 se va a volver a ejecutar