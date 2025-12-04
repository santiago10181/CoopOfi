import express from 'express';
import { comparar } from '../Contollers/Encript.js';
import usuarios from '../DB_ejemplo.js';
import {JWT_CONFIG} from '../Contollers/config.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Validación mínima en backend (aunque valides en el front)
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      error: 'Username y password son requeridos'
    });
  }

  // Buscar usuario una sola vez
  const usuario = usuarios.find(user => user.username === username);

  if (!usuario) {
    return res.status(401).json({
      success: false,
      error: 'Credenciales inválidas'
    });
  }

  try {
    const passwordMatch = await comparar(password, usuario.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        error: 'Credenciales inválidas'
      });
    }

    // Crear el token JWT
    const token = jwt.sign(
      { id: usuario.id, username: usuario.username },
      JWT_CONFIG.secret,
      { expiresIn: JWT_CONFIG.expiresIn }
    );

        res.cookie('access_token', token, {
        httpOnly: true,     // el JS del navegador no puede leerla (protege contra XSS)
        // secure: process.env.NODE_ENV === 'production', // solo HTTPS en producción
        sameSite: 'lax', // o 'lax' según necesites
        maxAge: 1000 * 60 * 60 * 24 // ejemplo: 24 horas (en milisegundos)
      });
    return res.status(200).json({
      success: true,
      message: 'Login exitoso',
      token,
      user: { id: usuario.id, username: usuario.username }
    });
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

export default router;
