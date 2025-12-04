import express from 'express';
import { encriptar } from '../Contollers/Encript.js';
import usuarios from '../DB_ejemplo.js';

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {

    //VALIDA QUE VENGAN USERNAME Y PASSWORD
    const username = req.body.username;
    const password = req.body.password;
    
    if (!username || !password) {
        return res.status(400).json({
            success: false,
            error: 'Username y password son requeridos',
            received: req.body // ← Para debug
        });
    }
    
    //VERIFICA SI YUA EXISTE DE ANTEMANO
    const userExists = (username) =>  usuarios.some(user => user.username === username);

    try {

        //SI YA EXISTE, RETORNA ERROR 409
        if (userExists(username)) {
            return res.status(409).json({
                success: false,
                error: 'El usuario ya existe'
            });
        }

        //SI NO EXISTE, CREA EL USUARIO Y ENCRIPTA LA CONTRASEÑA
        const passwordEncriptada = await encriptar(password);
        const newUser = {
            id: Date.now() + Math.floor(Math.random() * 1000),
            username: username.trim(),
            password: passwordEncriptada,
            createdAt: new Date().toISOString()
        };

        usuarios.push(newUser);
       //RETORNA EXITO 201        
        res.status(201).json({
            success: true,
            message: 'Usuario registrado exitosamente',
            user: { id: newUser.id, username: newUser.username }
        });
    }
    catch (error) {
        //MANEJO DE ERRORES GENERALES
        res.status(500).json({ success: false, err: 'Error servidor',error: error.message });
    }
});

export default router;
