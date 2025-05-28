'use strict'

// De esta manera puedo guardar los parametros de la funcion dentro de la consola
// Dentro de la consola pondria node calculadora.js 3 4 6
var args = process.argv.slice(2);

// Esto me devolveria un array con los tres elementos 3 4 6
console.log(args);

// El slice(2) se utiliza para mostrar a partir del segundo parametro ya que el primero siempre va a ser la ruta del archivo

