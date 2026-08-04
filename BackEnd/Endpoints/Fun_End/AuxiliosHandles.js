import { getAuxiliosByUserId } from '../../../Base_Datos_Local/Func_bd/getAuxiliosByUserId.js';

const AuxiliosHandler = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no autenticado.',
        auxilios: [],
      });
    }

    const auxilios = await getAuxiliosByUserId(userId);

    return res.status(200).json({
      success: true,
      total: auxilios.length,
      auxilios,
    });
  } catch (error) {
    console.error('Error en AuxiliosHandler:', {
      message: error.message,
      code: error.code,
      errno: error.errno,
      sqlMessage: error.sqlMessage,
      sqlState: error.sqlState,
    });

    return res.status(500).json({
      success: false,
      message: error.message || 'Error interno del servidor.',
      auxilios: [],
    });
  }
};

export default AuxiliosHandler; 