// BackEnd/Endpoints/Fun_End/AdminDashboardHandler.js

import { getAdminBasicData } from '../../../Base_Datos_Local/Func_bd/getAdminBasicData.js';

/**
 * Endpoint mínimo para el dashboard administrativo.
 * Solo retorna datos básicos del perfil del admin.
 */
const AdminDashboardHandler = async (req, res) => {
  const { userId, clienteId } = req.user;

  try {
    const admin = await getAdminBasicData(userId, clienteId);

    if (!admin) {
      return res.status(404).json({
        error: 'Administrador no encontrado',
      });
    }

    return res.status(200).json({
      user: {
        id: admin.id,
        email: admin.email,
        rol: admin.rol,
        name: admin.name || 'Administrador',
        cargo: admin.cargo || '',
        cooperativa: admin.cooperativa_nombre,
      },
    });
  } catch (error) {
    console.error('Error en AdminDashboardHandler:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default AdminDashboardHandler;