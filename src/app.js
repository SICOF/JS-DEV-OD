import express from "express"; 
import morgan from "morgan";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import mongoose from "./database/database.mongo";
import clientesRoutes from "./clientes/clientes.routes";
import usuariosRoutes from "./usuarios/usuarios.routes";
import authRoutes from "./auth/auth.routes";


const app= express();

//settings
app.set("port", 3000);

//Connectar base de datos
mongoose.getConnection();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use(authRoutes);
app.use(clientesRoutes);
app.use(usuariosRoutes);


//Export
export default app;
