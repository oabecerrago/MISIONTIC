//console.log("Hola mundo")


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion a base de datos
mongoose.connect("mongodb+srv://dbUsuario:progweb2022@oabecerrago.9glnc.mongodb.net/dbUsuario?retryWrites=true&w=majority");

//app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo desde el puerto 3000")
});