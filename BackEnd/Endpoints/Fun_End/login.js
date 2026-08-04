// BackEnd/Endpoints/Fun_End/login.js
import jwt from "jsonwebtoken";

import { comparePassword } from "../../Auth/HashUse.js";
import { config } from "../../config.js";
import { pool } from "../../../Base_Datos_Local/index.js";

/**
 * Autentica una cuenta y crea una sesión JWT con su rol y tenant.
 *
 * El frontend usa `user.rol` para definir la experiencia visual.
 * Los controladores usan `req.user.rol` y `req.user.clienteId`
 * para aplicar autorización y aislamiento multi-tenant.
 */
const loginHandler = async (req, res) => {
  const email = req.body.email?.trim().toLowerCase();
  const { password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email y contraseña son requeridos.",
    });
  }

  try {
    const [rows] = await pool.execute(
      `
        SELECT
          u.id,
          u.email,
          u.password_hash,
          u.asociado_id,
          u.cliente_id,
          u.estado AS usuario_estado,
          r.nombre AS rol,
          r.estado AS rol_estado,
          c.estado AS cliente_estado
        FROM usuarios AS u
        INNER JOIN roles AS r
          ON r.id = u.rol_id
        INNER JOIN clientes AS c
          ON c.id = u.cliente_id
        WHERE u.email = ?
        LIMIT 1
      `,
      [email]
    );

    const user = rows[0];

    /*
     * La respuesta no revela si el correo existe o si falló la contraseña.
     * Así se reduce el riesgo de enumerar cuentas válidas.
     */
    if (!user || !(await comparePassword(password, user.password_hash))) {
      return res.status(401).json({
        error: "Credenciales inválidas.",
      });
    }

    if (
      user.usuario_estado !== "Activo" ||
      user.rol_estado !== "Activo" ||
      user.cliente_estado !== "Activo"
    ) {
      return res.status(403).json({
        error: "La cuenta no está habilitada para ingresar.",
      });
    }

    const sessionUser = {
      id: user.id,
      email: user.email,
      rol: user.rol.trim().toLowerCase(),
      asociadoId: user.asociado_id,
      clienteId: user.cliente_id,
    };

    /*
     * El JWT contiene solamente atributos necesarios para autorización.
     * No lleva password, hash, estado ni datos personales del asociado.
     */
    const token = jwt.sign(
      {
        userId: sessionUser.id,
        rol: sessionUser.rol,
        asociadoId: sessionUser.asociadoId,
        clienteId: sessionUser.clienteId,
      },
      config.jwtSecret,
      {
        expiresIn: config.jwtExpiresIn || "1h",
      }
    );

    await pool.execute(
      `
        UPDATE usuarios
        SET ultimo_acceso = CURRENT_TIMESTAMP
        WHERE id = ?
      `,
      [user.id]
    );

    return res.status(200).json({
      message: "Login exitoso.",
      token,
      user: sessionUser,
    });
  } catch (error) {
    console.error("Error durante login:", error);

    return res.status(500).json({
      error: "Error interno del servidor.",
    });
  }
};

export default loginHandler;