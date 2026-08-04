// BackEnd/Auth/midlewareLogin.js
import jwt from "jsonwebtoken";

import { config } from "../config.js";

/**
 * Verifica el JWT recibido en Authorization y deja su payload en req.user.
 *
 * Este middleware autentica: confirma quién hace la petición.
 * La autorización por rol se realiza después con authorizeRoles.
 */
export const authenticateJWT = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Token de autenticación requerido.",
    });
  }

  const token = authorization.slice("Bearer ".length);

  try {
    req.user = jwt.verify(token, config.jwtSecret);
    return next();
  } catch (error) {
    console.warn("JWT inválido o vencido:", error.message);

    return res.status(401).json({
      error: "Token inválido o expirado.",
    });
  }
};

/**
 * Restringe una ruta a uno o varios roles previamente autenticados.
 *
 * Debe usarse después de authenticateJWT para garantizar req.user.rol.
 *
 * @param {...string} allowedRoles - Roles autorizados para la operación.
 */
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.rol)) {
      return res.status(403).json({
        error: "No tienes permiso para realizar esta acción.",
      });
    }

    return next();
  };
};

export default authenticateJWT;