
import { Router } from "express";
import { methods as clientesController } from "../clientes/clientes.controller";

const router = Router();

router.post("/api/clientes/add", clientesController.addCliente);

export default router;

