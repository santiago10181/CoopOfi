import { getConveniosDisponiblesByUserId } from '../../../Base_Datos_Local/Func_bd/getConveniosDisponiblesByUserId.js';

const ConveniosDisponiblesHandler = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no autenticado.',
        convenios: [],
      });
    }

    const convenios = await getConveniosDisponiblesByUserId(userId);

    return res.status(200).json({
      success: true,
      total: convenios.length,
      convenios,
    });
  } catch (error) {
    console.error('Error en ConveniosDisponiblesHandler:', {
      message: error.message,
      code: error.code,
      sqlMessage: error.sqlMessage,
    });

    return res.status(500).json({
      success: false,
      message: error.message || 'No fue posible cargar los auxilios y convenios.',
      convenios: [],
    });
  }
};

export default ConveniosDisponiblesHandler;