import { pool } from '../index.js';

export const getSolicitudesCreditoByUserId = async (userId) => {
  // 1. Obtenemos el asociado_id del usuario autenticado
  const [userRows] = await pool.execute(
    `SELECT asociado_id FROM usuarios WHERE id = ?`,
    [userId]
  );

  // Si el usuario (ej. un admin) no tiene asociado_id, devolvemos array vacío
  if (userRows.length === 0 || !userRows[0].asociado_id) {
    return [];
  }

  const asociadoId = userRows[0].asociado_id;

  // 2. Buscamos las solicitudes de ese asociado específico
  const [rows] = await pool.execute(
    `SELECT 
       sc.id, 
       sc.monto_solicitado, 
       sc.plazo_solicitado_meses, 
       sc.estado, 
       sc.fecha_creacion,
       tc.nombre AS tipo_credito_nombre
     FROM solicitudes_credito sc
     LEFT JOIN tipos_credito tc ON sc.tipo_credito_id = tc.id
     WHERE sc.asociado_id = ?
     ORDER BY sc.fecha_creacion DESC`,
    [asociadoId]
  );

  return rows;
};