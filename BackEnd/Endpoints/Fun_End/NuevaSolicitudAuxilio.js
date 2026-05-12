// Endpoints/Fun_End/NuevaSolicitudAuxilioHandler.js
import { crearSolicitudAuxilio, setNuevoAuxilio } from '../../../BaseDatos_Simuladas/index.js';
import { v7 as uuidv7 } from 'uuid';
import { auxilios } from '../../../BaseDatos_Simuladas/auxilio.js';

const NuevaSolicitudAuxilioHandler = (req, res) => {
  const userId = req.user.userId;
  const data   = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'Body vacío o inválido' });
  }

  // ✅ Generamos UUID y lo agregamos a la data
  const id = uuidv7(); 
  const auxilioSave = { ...data, id };

  try {
    // 1. Formateamos y guardamos en el array temporal de solicitudes
    const nuevaSolicitud = crearSolicitudAuxilio(userId, auxilioSave);
    
    // 2. Pusheamos a la tabla principal (para que aparezca en el getAuxiliosByUserId)
    setNuevoAuxilio(nuevaSolicitud);
    console.log(data);
    
    return res.status(201).json({ 
      message: 'Solicitud creada correctamente', 
      solicitud: nuevaSolicitud 
    });
  } catch (err) {
    console.error('Error creando solicitud de auxilio:', err);
    return res.status(500).json({ error: 'Error interno al crear la solicitud' });
  }
};

export default NuevaSolicitudAuxilioHandler;