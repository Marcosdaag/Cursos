'use strict'
// Guardamos toda la configuracion de express y las peticiones con bodyparser

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar rutas

// Middlewares: capa o metodo que se ejecuta antes de ejecutar la accion de un controlador o el resultado de la peticion
app.use(bodyParser.urlencoded({extended: false})); // Configuracion necesaria para body parser
app.use(bodyParser.json()); // Esto hace que todos los datos que me lleguen son pasados a json

// Cors

// Rutas
app.get('/', (request, response) =>{
    response.status(200).send({message: "Pagina de inicio"});
});

app.get('/test', (request, response) =>{
    response.status(200).send({message: "Hola mundo desde mi api de nodejs"});
});

app.post('/test', (request, response) =>{
    console.log(request.body.nombre);
    response.status(200).send({message: "Hola mundo desde mi api de nodejs peticiones post"});
});

// Exportar
module.exports =  app;