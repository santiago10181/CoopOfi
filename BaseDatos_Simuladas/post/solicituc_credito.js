// ← Array interno, no parámetro
const solicitudes = [];

export const crearSolicitudCredito = (userId, data) => { // ← Solo 2 parámetros
  const nuevaSolicitud = {
    id:                   data.id, // UUID generado en el handler
    usuario_id:           userId,
    fecha_solicitud:      new Date().toISOString().slice(0, 10),
    estado:               'pendiente',
    sol_tipo_garantia:    data.sol_tipo_garantia,
    tipo_credito:         data.sol_id_linea_credito,
    monto_solicitado:    Number(data.sol_valor_credito),
    plazo_meses:          Number(data.sol_plazo_credito),
    payload:              data
  };

  solicitudes.push(nuevaSolicitud);
  return nuevaSolicitud;
};
