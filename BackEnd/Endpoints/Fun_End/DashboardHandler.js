import { act } from 'react';
import {getUserById} from '../../../BaseDatos_Simuladas/index.js';
const DashboardHandler = (req, res) => {
  const userId = req.user.userId;
  const user = getUserById(userId);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  console.log(user);

  res.json({
    message: 'Perfil protegido - JWT OK',
    user: {
      id: req.user.userId,
      name: `${user.nombres} ${user.apellidos}`,
      email: user.email,
      activo: user.is_active,
      rol: user.rol,
      cargo: user.cargo_empresa,
    }
  });
};

export default DashboardHandler;