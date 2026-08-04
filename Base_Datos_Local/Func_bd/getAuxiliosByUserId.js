import { pool } from '../index.js';

export const getAuxiliosByUserId = async (userId) => {
  // 1. Obtener el asociado vinculado al usuario autenticado
  const [userRows] = await pool.execute(
    `SELECT asociado_id
     FROM usuarios
     WHERE id = ?`,
    [userId]
  );

  if (userRows.length === 0) {
    throw new Error('El usuario autenticado no existe.');
  }

  const asociadoId = userRows[0].asociado_id;

  if (!asociadoId) {
    throw new Error('El usuario no tiene un asociado vinculado.');
  }

  // 2. Obtener las solicitudes del asociado
  const [rows] = await pool.execute(
    `SELECT
      sc.id,
      sc.estado,
      sc.descripcion_solicitud AS descripcion,
      sc.archivo_adjunto_url,
      sc.comentario_admin_actual,
      sc.fecha_respuesta,
      sc.fecha_creacion,
      sc.fecha_actualizacion,

      c.id AS convenio_id,
      c.codigo,
      c.nombre AS auxilioConvenio,
      c.tipo,
      c.descripcion AS descripcionConvenio

    FROM solicitudes_convenio sc
    INNER JOIN convenios c
      ON c.id = sc.convenio_id

    WHERE sc.asociado_id = ?

    ORDER BY sc.fecha_creacion DESC`,
    [asociadoId]
  );

  return rows;
};