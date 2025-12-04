import express from 'express'
import cors from 'cors'
import RouterRegister from './AuthRoutes/Register.js'
import RouterLogin from './AuthRoutes/Login.js'
import cookieParser from 'cookie-parser';
import RutaEjemplo from './Routes/Rutaejemplo.js'
import {corsOptions} from './Contollers/MiddlewareCors.js'

const app = express()
app.use(express.json());

app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/auth/register',RouterRegister)
app.use('/auth/login',RouterLogin)
app.use('/private',RutaEjemplo)

app.listen(3000,()=>{
    console.log("working port 3000");
})