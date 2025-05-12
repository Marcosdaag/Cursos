'use strict'

// Prueba con var
var numero = 40;
console.log(numero); // Valor 40

if(true){
    var numero = 50;
    console.log(numero); // Valor 50
}

console.log(numero); // Valor 50


// Prueba con let
var texto = "Curso de JS";
console.log(texto); // Mismo valor que arriba

if(true){
    let texto = "Curso de PHYTON";
    console.log(texto); // Valor Curso de PHYTON
}

console.log(texto); // Valor Curso de JS
