// Endpoints/Fun_End/CreditosHandler.js
import { getSolicitudesCreditoByUserId } from '../../../Base_Datos_Local/Func_bd/getSolicitudesCreditoByUserId.js';

const CreditosHandler = async (req, res) => {
  const userId = req.user.userId;

  try {
    const solicitudes = await getSolicitudesCreditoByUserId(userId);
     console.log('Solicitudes de crédito obtenidas:', solicitudes);
    return res.status(200).json({
      total: solicitudes.length,
      solicitudes,
    });
  } catch (error) {
    console.error('Error en CreditosHandler:', error);
    return res.status(500).json({
      error: 'Error interno del servidor',
    }); 
  }
};

export default CreditosHandler;