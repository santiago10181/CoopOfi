import { createSolicitudCredito } from "../../../Base_Datos_Local/Func_bd/createSolicitudCredito.js";

const NuevaSolicitudCreditoHandler = async (req, res) => {
  const userId = req.user.userId;
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ 
      success: false,
      message: "Body vacío o inválido", 
      data: null 
    });
  }

  try {
    const nuevaSolicitud = await createSolicitudCredito(userId, data);
    return res.status(201).json({ 
      success: true,
      message: "Solicitud creada y datos actualizados correctamente", 
      data: nuevaSolicitud 
    });
  } catch (err) {
    console.error("Error en NuevaSolicitudCreditoHandler:", err.message);
    return res.status(500).json({ 
      success: false,
      message: err.message || "Error interno al crear la solicitud", 
      data: null 
    });
  }
};

export default NuevaSolicitudCreditoHandler;