import { getDashboardUserById } from '../../../Base_Datos_Local/Func_bd/getDashboardUserById.js';

const DashboardHandler = async (req, res) => {
  // El userId viene del middleware que validó el JWT
  const userId = req.user.userId;

  try {
    const user = await getDashboardUserById(userId);

    // Si el token es válido pero el usuario fue borrado de la BD
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado en el sistema' });
    }

    // Respuesta limpia para el frontend
    return res.status(200).json({
      prestamos: [], // Listo para conectar cuando se desarrollen los préstamos
      user: {
        id: user.id,
        rol: user.rol,
        activo: Boolean(user.activo),
        name: user.name,
        email: user.email,
        cargo: user.cargo,
      },
    });
  } catch (error) {
    console.error('Error en DashboardHandler:', error);
    // Error 500 genérico para no filtrar detalles del servidor al cliente
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default DashboardHandler;