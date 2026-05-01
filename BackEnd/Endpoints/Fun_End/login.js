
import jwt from 'jsonwebtoken';
import { comparePassword } from '../../Auth/HashUse.js';
import usuarios from '../../../BaseDatos_Simuladas/usuarios.js'; // Importa tu "DB" simulada
import { config } from '../../config.js'; // ← Tu config existente

const loginHandler = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y password requeridos' });
  }

  try {
     
    const user = usuarios.find(u => u.email === email);
    
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas email' });
    }

    const isMatch = await comparePassword(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas pass' });
    }
    
    // JWT con tu config
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username,
        rol: user.rol
      },
      config.jwtSecret, // ← De tu config.js
      { expiresIn: config.jwtExpiresIn || '1h' }
    );

    res.json({
      message: 'Login exitoso',
      token,
      user: {id: user.id, username: user.username, email: user.email,rol:user.rol} 
    });
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export default loginHandler;
