import Usuario from './usuarios.model';
import bcrypt from 'bcryptjs';

const addUsuario =  async (req,res)=>{

            const {usr,
                prinom,
                segnom,
                priape,
                segape,
                clave,
                estado,
                creado} = req.body;

        try {
          

           //se verifica si el usuario ya existe 
            let existUser = await Usuario.findOne({usuario:usr});
           //si usuario existe se retorna respuesta.
           if(existUser) return res.status(409).json({status:"Error",mensaje:"Usuario ya existe!"});                  
            
           //de lo contrario se agrega documento con contraseña encriptada

            let salt = await bcrypt.genSalt(10);
            let passwordEncript =  await bcrypt.hash(clave,salt);


            let usuario = await Usuario.create({
                usuario : usr,
                primerNombre: prinom,
                segundoNombre: segnom,
                primerApellido: priape,
                segundoApellido: segape,
                clave: passwordEncript,
                estado: estado,
                creado: creado
            });
     
            
        res.status(200).json({status:"OK",data: {addedusr}});

            
        } catch (error) {

                console.log("No se guardo el usuario");
                res.status(300).json({status:"Error",mensaje:error.message});
            
        }

}


export const methods = {addUsuario};
