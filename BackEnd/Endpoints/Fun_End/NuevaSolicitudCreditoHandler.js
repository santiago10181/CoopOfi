import { crearSolicitudCredito, setNuevoCredito } from '../../../BaseDatos_Simuladas/index.js';
import { v7 as uuidv7 } from 'uuid';

const NuevaSolicitudCreditoHandler = (req, res) => {
  const userId = req.user.userId;
  const data   = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'Body vacío o inválido' });
  }
  const id = uuidv7(); // ✅ Nuevo UUID por request
  const prestamoSave = { ...data, id };

  try {
    const nuevaSolicitud = crearSolicitudCredito(userId, prestamoSave);
    setNuevoCredito(nuevaSolicitud);

    return res.status(201).json({ message: 'Solicitud creada correctamente', solicitud: nuevaSolicitud });
  } catch (err) {
    console.error('Error creando solicitud:', err);
    return res.status(500).json({ error: 'Error interno al crear la solicitud' });
  }
};

export default NuevaSolicitudCreditoHandler;
