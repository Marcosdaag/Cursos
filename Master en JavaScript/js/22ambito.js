'use strict'

function holaMundo(text){
    var hola = "Texto en la funcion";
    console.log(text);
    console.log(numero.toString()); // Podemos acceder a una varaible que este fuera de la funcion
}

var numero = 12;
var text = "Hola soy una variable global";

holaMundo(text);
console.log(hola); // Esto va a dar error ya que estoy intentando acceder a una variable creada dentro de una funcion
