import usuariosModel from '../usuarios/usuarios.model';
import Usuario from '../usuarios/usuarios.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const  login =  async (req,res)=>{

    try{

        const {usr,clave} = req.body;
        console.log("parametros: " + usr+ " " +clave);

        const docusuario = await Usuario.findOne({usuario:usr});

        console.log("Registro encontrado: "+ docusuario);


        if(!docusuario) return res.status(400).json({status:"Error",mensaje:"Credenciales invalidas"}); 
    
        // Se verifica coincidencia del password encriptado
        let passwdCoincide = await bcrypt.compare(clave,docusuario.clave);

        console.log("Coincide password: "+ passwdCoincide);

        if(!passwdCoincide) return res.status(400).json({status:"Error",mensaje:"Credenciales invalidas"}); 


        const token = jwt.sign({usr_id: docusuario._id},'secretos',{expiresIn:"2h"});

        res.json({token});

    } catch(err){

        res.status(300).json({status:"Error",mensaje:"Error" + err.message});
    }

}

export const methods = {login};
