// Contollers/MiddlewareToken.js  ← VERSIÓN CORRECTA PARA COOKIES
import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from './config.js';

export const authenticateToken = (req, res, next) => {
  // 1. Leer el token de la cookie (no del header)
  const token = req.cookies.access_token;   // ← AQUÍ ESTÁ LA CLAVE

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Acceso denegado: token faltante'
    });
  }

  jwt.verify(token, JWT_CONFIG.secret, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: 'Token inválido o expirado'
      });
    }
    req.user = user;
    next();
  });
};