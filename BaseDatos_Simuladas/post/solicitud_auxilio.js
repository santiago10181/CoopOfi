// src/BaseDatos_Simuladas/post/solicitud_auxilio.js

const solicitudesAuxilios = []; // ← Array interno

export const crearSolicitudAuxilio = (userId, data) => {
  const nuevaSolicitud = {
    id: data.id, // UUID generado en el handler
    radicado: `SOL-AUX-${data.id.substring(0, 8).toUpperCase()}`, // Simulamos un código visual
    usuario_id: userId,
    fecha_solicitud: new Date().toISOString().slice(0, 10), // "YYYY-MM-DD"
    estado: 'pendiente',
    
    // Mapeo específico de los campos de tu formulario de auxilios
    tipo: data.type,             // Viene del select (SALUD, EDUCACION...)
    subtipo: data.subtype,       // Viene del select dependiente
    descripcion: data.description, 
    monto: 0, // Inicia en 0 o lo que aplique para auxilios
    plazo: "N/A", 
    payload: data // Guardamos la data cruda por si acaso
  };

  solicitudesAuxilios.push(nuevaSolicitud);
  return nuevaSolicitud;
};