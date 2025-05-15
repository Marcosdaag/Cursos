'use strict'

//Funciones anonimas
//Funcion que no tiene nombre y puede ser guardado dentro de una variable y suele ser usado para hacer callbacks (funcion que se ejecuta dentro de otra)

var pelicula = function(nombre){
    return "La pelicula es "+nombre;
}

//Callbacks

// Esta funcion tiene 3 parametros, el primer numero, el segundo numero y como tercer parametro es una funcion de callback que aun no esta definida pero al momento de llamar sumame podemos darle la logica que queramos
function sumame(numero1, numero2, sumaPorDos){
    var sumar = numero1+numero2;

    sumaPorDos(sumar);

    return sumar;
}

// En la funcion de arriba definimos que la funcion sumaPorDos recibe un dato que es sumar y despues cuando llamamos la funcion, definimos el comportamiento de esa funcion y que es lo que hace con ese dato
sumame(9, 5, function(dato){
    console.log("la suma por dos es "+dato*2 );
});


//Funciones de flecha lo que hacen es primero llamar a los parametros (en caso de ser uno no es necesario el parentesis) y luego una flecha que reemplazaria la palabra function por ej:

// De esta manera funcionaria exactamente igual pero es una manera de hacerlo mas limpio y que sea mas claro
sumame(9, 10, dato =>{
    console.log("la suma por dos es "+dato*2 );
});