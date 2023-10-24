import mongoose from "mongoose";


var Schema = mongoose.Schema;

var telefonoSchema = new Schema({  
    celular: String,
    trabajo: String  
},{_id : false});

var direccionSchema = new Schema({  
    tipo: String,
    departamento: String,
    municipio: String,
    colonia: String,
    referencias: String 
},{ _id : false })

var clienteSchema = new Schema({
    primerNombre: {type: String, trim: true},
    segundoNombre: {type: String, trim: true},
    primerApellido: {type: String, trim: true},
    segundoApellido: {type: String, trim: true},
    fecha_nacimiento: Date,
    genero: String,
    telefonos: telefonoSchema,
    direcciones: [direccionSchema],
    referido_por: String
}, {collection: "clientes"});

const  Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;