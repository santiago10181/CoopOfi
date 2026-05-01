// Endpoints/Fun_End/CreditosHandler.js
import { getPrestamosByUserId } from '../../../BaseDatos_Simuladas/index.js';

const CreditosHandler = (req, res) => {
  const userId = req.user.userId;
  const prestamos = getPrestamosByUserId(userId);

  if (!prestamos) {
    return res.status(404).json({ error: 'No se encontraron créditos' });
  }

  // Ordenados de más reciente a más antiguo
  const prestamosOrdenados = prestamos
    .sort((a, b) => new Date(b.fecha_solicitud) - new Date(a.fecha_solicitud));

  res.json({
    total: prestamosOrdenados.length,
    prestamos: prestamosOrdenados
  });
};

export default CreditosHandler;
