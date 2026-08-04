import { createSolicitudConvenio } from '../../../Base_Datos_Local/Func_bd/createSolicitudConvenio.js';

const NuevaSolicitudAuxilioHandler = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const data = req.body;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no autenticado.',
        data: null,
      });
    }

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Debes enviar los datos de la solicitud.',
        data: null,
      });
    }

    const nuevaSolicitud = await createSolicitudConvenio(userId, data);

    return res.status(201).json({
      success: true,
      message: 'Solicitud creada correctamente.',
      data: nuevaSolicitud,
    });
  } catch (error) {
    console.error('Error en NuevaSolicitudAuxilioHandler:', {
      message: error.message,
      code: error.code,
      sqlMessage: error.sqlMessage,
    });

    return res.status(400).json({
      success: false,
      message: error.message || 'No fue posible crear la solicitud.',
      data: null,
    });
  }
};

export default NuevaSolicitudAuxilioHandler;