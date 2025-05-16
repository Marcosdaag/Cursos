'use strict'

//Array multidimensionales
//En resumen son arrays dentro de otros arrays

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

//Estoy creando un array con dos arrays dentro
var cine = [categorias, peliculas];

//Para acceder a esos arrays
console.log(cine[0][1]);
//De esta manera accedo a categorias y despues a terror

//Operaciones con arrays

//Como agregar un nuevo elemento a un array
peliculas.push("Batman");

//Sistema para agregar peliculas

do {
    var elemento = prompt("Ingresa la peli");
    peliculas.push(elemento);
} while (elemento != "fin");

//Con el metodo pop elimino el ultimo elemento ya que se mostraria fin, que es la palbra para finalizar el bucle
peliculas.pop();
console.log(peliculas);

//Como eliminar un elemento de un array
var indice = peliculas.indexOf("La verdad duele");

//Lo que hace esto es que si indice es mayor a menos uno (osea hubo coincidencia) hace un splice de peliculas en el indice, osea en esa posicion y borra un 1 elemento
if(indice > -1){
    peliculas.splice(indice, 1);
}


//Pasar array a texto
peliculas.join();

//Pasar texto a array
var texto = "texto1, texto2, texto3";

var textoArray = texto.split(", ");

console.log(textoArray);


//Ordenar un array
peliculas.sort();
peliculas.reverse();