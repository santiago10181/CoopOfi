import { getSolicitudesCreditoByUserId } from "../../../Base_Datos_Local/Func_bd/getSolicitudesCreditoByUserId.js";

const CreditosHandler = async (req, res) => {
  try {
    const userId = req.user.userId;
    
    // Obtenemos el historial de créditos del usuario
    const creditos = await getSolicitudesCreditoByUserId(userId);

    return res.status(200).json({
      success: true,
      message: "Historial de créditos obtenido correctamente",
      data: creditos
    });

  } catch (error) {
    console.error("Error en CreditosHandler:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor al obtener los créditos",
      data: null
    });
  }
};

export default CreditosHandler;