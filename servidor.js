// console.log("hola mundo")

const express = require('express');
const mongoose = require('mongoose');
const PersonaSchema = require("./PersonalDB/Persona.js"); 

const app = express();
const router = require('express');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion a base de datos
mongoose.connect("mongodb+srv://dbUsuario:progweb2022@oabecerrago.9glnc.mongodb.net/dbUsuario?retryWrites=true&w=majority");


//operaciones crud

router.get('/', (req, res) =>{
    res.send("inicio de mi API");
})

router.post('/persona', (req, res) =>{
    let nuevaPersona = new PersonaSchema({
        idPersona: req.body.id,
        documento_de_identificacionPersona: req.body.documento_de_identificacion,
        nombresPersona: req.body.nombres,
        apellidosPersona: req.body.apellidos,
        direccionPersona: req.body.direccion,
        correo_electronicoPersona: req.body.correo_electronico,
        telefono_fijoPersona: req.body.telefono_fijo,
        telefono_celularPersona: req.body.telefono_celular,
        enlace_sitioWebPersona: req.body.enlace_sitioWeb,
        descripcion_del_perfilPersona: req.body.descripcion_del_perfil
    });

    nuevaPersona.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("La Persona ha sido almacenada correctamente")
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo desde el puerto 3000")
});

