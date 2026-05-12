// Endpoints/Fun_End/CreditosHandler.js
import { getPrestamosByUserId } from '../../../BaseDatos_Simuladas/index.js';

const CreditosHandler = (req, res) => {
  const userId = req.user.userId;
  const prestamos = getPrestamosByUserId(userId) ?? [];

  const prestamosOrdenados = [...prestamos]
    .sort((a, b) => new Date(b.fecha_solicitud) - new Date(a.fecha_solicitud));

  return res.status(200).json({
    total: prestamosOrdenados.length,
    prestamos: prestamosOrdenados,
  });
};

export default CreditosHandler;

