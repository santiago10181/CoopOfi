import jwt from 'jsonwebtoken';
import { comparePassword } from '../../Auth/HashUse.js';
import { config } from '../../config.js';
import { pool } from '../../../Base_Datos_Local/index.js';

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y password requeridos' });
  }

  try {
    const [rows] = await pool.execute(
      `
      SELECT id, email, password_hash, rol_id, asociado_id, estado
      FROM usuarios
      WHERE email = ?
      LIMIT 1
      `,
      [email]
    );

    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    if (user.estado !== 'Activo') {
      return res.status(403).json({ error: 'Usuario inactivo o bloqueado' });
    }

    const isMatch = await comparePassword(password , user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        rolId: user.rol_id,
        asociadoId: user.asociado_id
      },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn || '1h' }
    );

    await pool.execute(
      `
      UPDATE usuarios
      SET ultimo_acceso = CURRENT_TIMESTAMP
      WHERE id = ?
      `,
      [user.id]
    );

    return res.json({
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        email: user.email,
        rolId: user.rol_id,
        asociadoId: user.asociado_id,
        estado: user.estado
      }
    });
  } catch (err) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default loginHandler;