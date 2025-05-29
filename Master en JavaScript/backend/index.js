'use strict'
// Cargo o importo el modulo de mongoose
var mongoose = require('mongoose');

// Con esto le digo a mongoose que utilice las promesas then y cath al igual que javascript
mongoose.Promise = global.Promise;

// De esta manera me conecto a mi base de datos
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(()=>{
        console.log("conexion a la base de datos establecida correctamente");
    })
    .catch(error => console.log(error));