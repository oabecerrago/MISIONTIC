const mongoose = require('mongoose');

let PersonaSchema = new mongoose.Schema({
    idPersona: Number,
    documento_de_identificacionPersona: String,
    nombresPersona: String,
    apellidosPersona: String,
    direccionPersona: String,
    correo_electronicoPersona: String,
    telefono_fijoPersona: Number,
    telefono_celularPersona: Number,
    enlace_sitioWebPersona: String,
    descripcion_del_perfilPersona: String

});

module.exports = mongoose.model('persona', PersonaSchema, 'Tareas');