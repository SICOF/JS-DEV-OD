
import Cliente from "./clientes.model";


const addCliente = async (req,res)=>{

    let {primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        fecha_nacimiento,
        genero,
        telefonos,
        direcciones,
        referido_por} = req.body;
      
    try{ 

        let cliente = new Cliente({
          primerNombre,
          segundoNombre,
          primerApellido,
          segundoApellido,
          fecha_nacimiento,
          genero,
          telefonos,
          direcciones,
          referido_por
        })

        let addedcli = await cliente.save();

        res.status(200).json({status:"OK",data: {addedcli}});
      
    }catch(err){

        console.log(err);
        res.status(400).json({status:"ERROR",data: {err}});

    }
}








 export const methods= {
    addCliente
}