import {Schema,model} from "mongoose";

const usuariosSchema = new Schema({
    usuario: {type:String, unique:true, required:true},
    primerNombre:String,
    segundoNombre:String,
    primerApellido:String,
    segundoApellido:String,
    clave:{type:String, required:true},
    estado:String,
    creado: Date
});

 export default  model("Usuario", usuariosSchema);