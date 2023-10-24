import {Router} from 'express'
import {methods as usuariosController} from './usuarios.controller'

const router = Router();


router.post('/api/usuarios/add',usuariosController.addUsuario);


export default router;



