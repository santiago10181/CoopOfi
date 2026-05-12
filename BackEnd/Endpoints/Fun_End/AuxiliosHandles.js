import { getAuxiliosByUserId } from '../../../BaseDatos_Simuladas/index.js';

const AuxiliosHandler = (req, res) => {
  // 1. Obtenemos el ID del usuario desde la petición (middleware de auth)
  const userId = req.user.userId;
  
  // 2. Traemos los auxilios de la BD simulada (o un arreglo vacío si no hay)
  const historialAuxilios = getAuxiliosByUserId(userId) ?? [];

  // 3. Los ordenamos desde el más reciente al más antiguo, usando fecha_solicitud
  const auxiliosOrdenados = [...historialAuxilios]
    .sort((a, b) => new Date(b.fecha_solicitud) - new Date(a.fecha_solicitud));

  // 4. Respondemos con código 200 (OK) y los datos estructurados
  return res.status(200).json({
    total: auxiliosOrdenados.length,
    auxilios: auxiliosOrdenados,
  });
};

export default AuxiliosHandler;