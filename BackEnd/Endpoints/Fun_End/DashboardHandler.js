// BackEnd/Endpoints/Fun_End/DashboardHandler.js
import  {getDashboardUserById}  from '../../../Base_Datos_Local/Func_bd/getDashboardUserById.js';

const DashboardHandler = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await getDashboardUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.status(200).json({
      message: 'Perfil protegido - JWT OK',
      prestamos: [],
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
    return res.status(500).json({
      error: 'Error interno del servidor',
    });
  }
};

export default DashboardHandler;