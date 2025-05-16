'use strict'

// Arrays, arreglos o matrices

// Aca tenemos dos maneras de definir un array y cada elemento del array representa un indice o un numero, empezando por el 0 en vez del 1
var nombre =["Marcos", "Felipe", "Manolo", 52];
var lenguajes = new Array("PHP", "JS", "JAVA");

console.log(nombre);
console.log(lenguajes);

//Como acceder a un indice del array
console.log(nombre[1]);//Felipe ya que Marcos es el index 0

console.log(lenguajes.length);//Ver loongitud del array

//De esta sencilla manera creamos un prompt que nos devuelve un numero y en el alert mostramos el index del array al cual estamos llamando
var elemento = parseInt(prompt("Que elemento del array queres?", 0));

if(elemento >= nombre.length){
    alert("Introduci un numero menor que "+nombre.length);
}else{
    alert("El usuario seleccionado es"+nombre[elemento]);
}

//Como haria una iteracion para que se muestren todos los elementos en pantalla
for(var i =0; i < nombre.length; i++){
    document.write(nombre[i]+"<br/>");
}

//Formas mas interesante de hacerlo
nombre.forEach(function(elemento, indice){
    document.write(indice+" "+elemento);
});